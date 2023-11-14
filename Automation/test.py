import time
import csv
from selenium import webdriver
from selenium.common.exceptions import WebDriverException, TimeoutException
import logging

# Disable logging of SSL-related errors
logging.getLogger('urllib3').setLevel(logging.WARNING)

options = webdriver.ChromeOptions()

# Explicitly set the user data directory
user_data_dir = r'C:\Users\athar\AppData\Local\Google\Chrome\User Data'  # Change this to the actual path
options.add_argument(f'--user-data-dir={user_data_dir}')
options.add_argument("--disable-logging")
options.add_argument("--log-level=3")
# Provide the profile name with which we want to open the browser (Remove this if not needed)
options.add_argument(r'--profile-directory=Profile 1')
options.add_experimental_option("detach", True)

# Specify the custom "User-Agent" header to simulate a mobile device
mobile_user_agent = (
    "Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/95.0.4638.69 Mobile Safari/537.36"
)

# Set the custom "User-Agent" header in the Chrome WebDriver
options.add_argument(f"user-agent={mobile_user_agent}")

# Initialize the Chrome WebDriver directly (no need for ChromeDriver executable)
driver = webdriver.Chrome(options=options)
website_url = "https://www.hotstar.com/in/sports/cricket/icc-mens-cricket-world-cup-2023/m708810/live-streaming/1540025196"

driver.get( website_url)  # Add http:// or https:// as needed
        

