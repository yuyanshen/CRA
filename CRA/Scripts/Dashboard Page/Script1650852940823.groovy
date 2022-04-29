import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.callTestCase(findTestCase('CRA login'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.verifyElementPresent(findTestObject('Object Repository/Page_CRA/a_A Singapore Government Agency Website_lay_b36260'), 
    0)

WebUI.verifyElementPresent(findTestObject('Object Repository/Page_CRA/span_Dashboard_p-ink'), 0)

WebUI.verifyElementPresent(findTestObject('Object Repository/Page_CRA/button_Home'), 0)

WebUI.verifyElementPresent(findTestObject('Object Repository/Page_CRA/button_Profile'), 0)

WebUI.verifyElementPresent(findTestObject('Object Repository/Page_CRA/button_Logout'), 0)

WebUI.verifyElementText(findTestObject('Object Repository/Page_CRA/h5_Casino Regulatory Authority'), 'Casino Regulatory Authority')

WebUI.verifyElementText(findTestObject('Object Repository/Page_CRA/div_Best viewed using the latest versions o_e2fe59'), 
    'Best viewed using the latest versions of Microsoft Chromium Edge and Google Chrome')

WebUI.verifyElementPresent(findTestObject('Object Repository/Page_CRA/span_AP CO (approval) info_p-ink'), 0)

WebUI.verifyElementPresent(findTestObject('Object Repository/Page_CRA/span_AP CO Notification info_p-ink'), 0)

WebUI.verifyElementPresent(findTestObject('Object Repository/Page_CRA/span_CO Contribution to causes info_p-ink'), 0)

