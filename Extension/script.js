// Function to check if a script element starts with a specific string
function scriptStartsWith(script, string) {
    const scriptText = script.textContent.trim();
    return scriptText.startsWith(string);
  }
  
  // Function to check if a script uses sensor APIs
  function scriptUsesSensors(script) {
    const sensorAPIs = ['DeviceMotionEvent', 'DeviceOrientationEvent', 'LinearAccelerationSensor', 'Accelerometer', 'Gyroscope', 'AbsoluteOrientationSensor'];
    const usedSensors = sensorAPIs.filter(api => script.textContent.includes(api));
    return usedSensors.length > 0 ? usedSensors : null;
  }
  
  // Function to check if a given URL ends with .js
  function isJsFile(url) {
    return url.endsWith('.js');
  }
  
  // Function to check if an external JavaScript file uses sensor APIs
  async function checkJsFileForSensors(url) {
    try {
      const response = await fetch(url);
      const scriptContent = await response.text();
      const usedSensors = scriptUsesSensors({ textContent: scriptContent });
      if (!scriptStartsWith({ textContent: scriptContent }, 'console.log("Hello World After");') && usedSensors) {
        console.log('FOUND in external file:', usedSensors.join(', '));
        // Send sensor data to the server for external files
        const websiteName = window.location.hostname;
        sendSensorDataToServer(websiteName, url, true, 'Script.js');
      }
    } catch (error) {
      console.error('Error fetching or analyzing JS file:', error);
    }
  }
  
  // Function to send a POST request with sensor data to a server
  async function sendSensorDataToServer(websiteName, websiteURL, sensorFound, foundFrom) {
    const postData = {
      websiteName,
      websiteURL,
      sensorFound,
      foundFrom,
    };
  
    try {
      await fetch('http://localhost:3000/addWebsite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      console.log('POST request sent to server:', postData);
    } catch (error) {
      console.error('Error sending POST request to server:', error);
    }
  }
  
  // Function to check a script element for sensor usage and send data to the server
  function checkScriptForSensorsAndSendData(script) {
    const usedSensors = scriptUsesSensors(script);
    if (!scriptStartsWith(script, 'console.log("Hello World After");') && usedSensors) {
      console.log('FOUND in DOM:', usedSensors.join(', '));
      // Send sensor data to the server for DOM scripts
      const websiteName = window.location.hostname;
      sendSensorDataToServer(websiteName, window.location.href, true, 'DOM');
    }
  }
  
  // Observer function to watch for new script elements and check if they use sensor APIs
  function observeScripts(mutations) {
    mutations.forEach(function(mutation) {
      mutation.addedNodes.forEach(function(node) {
        if (node.nodeType === Node.ELEMENT_NODE && node.nodeName.toLowerCase() === 'script') {
          checkScriptForSensorsAndSendData(node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          node.querySelectorAll('script').forEach(function(script) {
            checkScriptForSensorsAndSendData(script);
          });
        }
      });
    });
  }
  
  // Set up the observer to watch for new script elements
  const observer = new MutationObserver(observeScripts);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  
  // Find and check external .js files for sensor usage
  document.querySelectorAll('script[src]').forEach(function(script) {
    const scriptSrc = script.getAttribute('src');
    if (isJsFile(scriptSrc)) {
      checkJsFileForSensors(scriptSrc);
    }
  });
  