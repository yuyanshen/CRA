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

WebUI.click(findTestObject('Page_CRA/a_AP CO (approval) info'))

WebUI.verifyElementText(findTestObject('Object Repository/Page_CRA/strong_1. General Information'), '1. General Information')

WebUI.verifyElementText(findTestObject('Object Repository/Page_CRA/p_(a) The accurate completion and timely su_a2d3e0'), 
    '(a) The accurate completion and timely submission of the application and supporting documents are essential for the CRA\'s evaluation of the application.')

WebUI.verifyElementText(findTestObject('Object Repository/Page_CRA/p_(b) CRA may request for further informati_02cedc'), 
    '(b) CRA may request for further information in relation to the application at any time as it may consider necessary.')

WebUI.verifyElementText(findTestObject('Object Repository/Page_CRA/p_(c) CRA may refuse to consider any applic_299f76'), 
    '(c) CRA may refuse to consider any application which is incomplete.')

WebUI.verifyElementText(findTestObject('Object Repository/Page_CRA/p_(d) Please ensure you have obtained all n_a05eac'), 
    '(d) Please ensure you have obtained all necessary approval(s) from your management or other relevant authorities (if any) for the information submitted in this application.')

WebUI.verifyElementText(findTestObject('Object Repository/Page_CRA/strong_2. False or Misleading Information'), '2. False or Misleading Information')

WebUI.verifyElementText(findTestObject('Object Repository/Page_CRA/p_It is an offence to provide false or misl_a6a6fe'), 
    'It is an offence to provide false or misleading information in connection with any application made to the CRA.')

WebUI.verifyElementText(findTestObject('Object Repository/Page_CRA/u_Applicationnotification forms specific (N_6718c0'), 
    'Application/notification forms specific (Notes to applicant)')

WebUI.verifyElementText(findTestObject('Object Repository/Page_CRA/p_i)This application is for approval of cas_e6df45'), 
    'i) This application is for approval of casino advertisement or casino promotion pursuant to regulation 3(1) of the Casino Control (Advertising) Regulations 2010.')

WebUI.verifyElementText(findTestObject('Object Repository/Page_CRA/p_ii)This application is to be submitted to_078e82'), 
    'ii) This application is to be submitted to the Authority at least 21 days before the proposed date of the publication or distribution of the advertisement or carrying out or offering of the promotion or date of the proposed deviation, or within such shorter period as the Authority may allow in any particular case.')

WebUI.verifyElementPresent(findTestObject('Object Repository/Page_CRA/span_Back_p-ink'), 0)

WebUI.verifyElementPresent(findTestObject('Object Repository/Page_CRA/span_Print_p-ink'), 0)

WebUI.verifyElementPresent(findTestObject('Object Repository/Page_CRA/span_Next_p-ink'), 0)

