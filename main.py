import requests
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import eel

eel.init('UI', allowed_extensions=['.js', '.html'])

if __name__ == '__main__':
	eel.start('index.html', port=0, size=(1400, 900))
