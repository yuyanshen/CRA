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

WebUI.click(findTestObject('Object Repository/Page_CRA/a_AP CO Notification info'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_Next'))

WebUI.setText(findTestObject('Object Repository/Page_CRA/input_Please specify relevant approved AP f_cb4ad9'), 's')

WebUI.click(findTestObject('Object Repository/Page_CRA/li_SPPLNADPA'))

WebUI.setText(findTestObject('Object Repository/Page_CRA/input_APEON title_p-inputtext p-component'), 'APCONTEST')

WebUI.sendKeys(findTestObject('Object Repository/Page_CRA/APEON_label_Start date'), '21 Apr 2024')

WebUI.sendKeys(findTestObject('Object Repository/Page_CRA/APEON_label_End date'), '21 Apr 2024')

WebUI.click(findTestObject('Object Repository/Page_CRA/label_Promotion run duration'))

WebUI.click(findTestObject('Object Repository/Page_CRA/APEON_AP_TARGET_div_empty'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_General Public'))

WebUI.setText(findTestObject('Object Repository/Page_CRA/APEON_textarea_AP detailsdescription_p-inputtexta_da871a'), 'TEST DATA')

WebUI.click(findTestObject('Object Repository/Page_CRA/apeon_No'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_Next'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_Next'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_Finish'))

