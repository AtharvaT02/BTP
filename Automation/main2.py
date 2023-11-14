import time
import csv
from selenium import webdriver
from selenium.common.exceptions import WebDriverException, TimeoutException
import logging

print("Hello World")
# Disable logging of SSL-related errors
logging.getLogger('urllib3').setLevel(logging.WARNING)
# Hardcoded CSV file path
csv_file_path = r'D:\BTP\Automation\tranco_258Z9-1m.csv\top-1m.csv'

# Specify the starting and ending index for websites
start_index =20000  # Change this to your desired starting index
end_index = 100000  # Change this to your desired ending index

options = webdriver.ChromeOptions()

# Explicitly set the user data directory
user_data_dir = r'C:\Users\athar\AppData\Local\Google\Chrome\User Data'  # Change this to the actual path
options.add_argument(f'--user-data-dir={user_data_dir}')
options.add_argument("--disable-logging")
options.add_argument("--log-level=3")
# Provide the profile name with which we want to open the browser (Remove this if not needed)
options.add_argument(r'--profile-directory=Profile 1')

# Specify the custom "User-Agent" header to simulate a mobile device
mobile_user_agent = (
    "Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/95.0.4638.69 Mobile Safari/537.36"
)

# Set the custom "User-Agent" header in the Chrome WebDriver
options.add_argument(f"user-agent={mobile_user_agent}")

# Initialize the Chrome WebDriver directly (no need for ChromeDriver executable)
driver = webdriver.Chrome(options=options)

# Open the CSV file with the list of websites
with open(csv_file_path, 'r') as file:
    csv_reader = csv.reader(file)

    # Skip to the starting index
    for i in range(start_index):
        next(csv_reader, None)

    # Iterate through the websites within the specified range
    for i, row in enumerate(csv_reader):
        if i > end_index:
            break  # Exit loop after visiting the specified number of websites

        website_id, website_url = row

        try:
            # Visit the website
            driver.get("http://" + website_url)  # Add http:// or https:// as needed
            print(f"Visited Website {website_id}: {website_url}")

            # Wait for up to 10 seconds for the page to load
            driver.set_page_load_timeout(10)

            # You can add additional automation steps here

        except (WebDriverException, TimeoutException) as e:
            # Handle the error as needed or simply continue to the next URL
            print(f"Error visiting Website {website_id}: {website_url}")
            
            # Log the error to a text file
            with open('error_log.txt', 'a') as error_file:
                error_file.write(f"Error visiting Website {website_id}: {website_url}\n")

# Close the browser when done
driver.quit()
