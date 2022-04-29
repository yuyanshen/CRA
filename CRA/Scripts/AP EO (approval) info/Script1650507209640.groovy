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
import org.openqa.selenium.JavascriptExecutor as JavascriptExecutor
import com.kms.katalon.core.webui.driver.DriverFactory as DriverFactory

WebUI.callTestCase(findTestCase('CRA login - Copy'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.click(findTestObject('Object Repository/Page_CRA/a_AP EO (approval) info'))

WebUI.click(findTestObject('Object Repository/Page_CRA/APEO_button_Next'))

WebUI.sendKeys(findTestObject('Object Repository/Page_CRA/APEO_AP title_p-inputtext p-component'), 'TEST APEO')

WebUI.sendKeys(findTestObject('Object Repository/Page_CRA/APEO_input_Email Address(es) for CC notification_58caa5'), 'PISY@AZAAS.COM')

WebUI.click(findTestObject('Object Repository/Page_CRA/APEO_label_No_1'))

WebUI.setText(findTestObject('Object Repository/Page_CRA/APEO_AP_STAR DATE_1'), '21 Apr 2024')

WebUI.setText(findTestObject('Object Repository/Page_CRA/input_APEO end date_1'), '21 Apr 2024')

WebUI.click(findTestObject('Object Repository/Page_CRA/APEO_div_empty_p-multiselect-trigger'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_Singapore Pools Private Limited outlet'))

WebUI.click(findTestObject('Object Repository/Page_CRA/div_Advertising and Promotion (AP)AP titleE_d374d1'))

WebUI.click(findTestObject('Object Repository/Page_CRA/APEO_AP type'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_Promotion with multiple runs'))

WebUI.click(findTestObject('Object Repository/Page_CRA/APEO_AP target audiences'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_General Public'))

WebUI.click(findTestObject('Object Repository/Page_CRA/div_Advertising and Promotion (AP)AP titleE_d374d1'))

WebUI.click(findTestObject('Object Repository/Page_CRA/AP button_Add1'))

WebUI.click(findTestObject('Object Repository/Page_CRA/APCO_span_Select Communication channel_p-dropdow_079fb2'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_AmbassadorsPromotional StaffMascots'))

WebUI.setText(findTestObject('Object Repository/Page_CRA/APCO_label_Start Date_2'), '21 Apr 2024')

WebUI.setText(findTestObject('Object Repository/Page_CRA/APEO_label_End Date_2'), '21 Apr 2024')

WebUI.click(findTestObject('Object Repository/Page_CRA/div_Communication channelAmbassadorsPromoti_b62a0f'))

WebUI.click(findTestObject('Object Repository/Page_CRA/APEOdiv_Location_p-checkbox-box'))

WebUI.click(findTestObject('Object Repository/Page_CRA/APEOdiv_ap commun'))

WebUI.click(findTestObject('Object Repository/Page_CRA/APEO_button_Confirm'))

WebUI.setText(findTestObject('Object Repository/Page_CRA/APEO_textarea_AP detailsdescription_p-inputtexta_da871a'), 'TEST APSS')

WebUI.setText(findTestObject('Object Repository/Page_CRA/APEO_label_Terms and conditions'), 'test area')

WebUI.click(findTestObject('Object Repository/Page_CRA/APEO_button_Next'))

WebUI.click(findTestObject('Object Repository/Page_CRA/APEO_Add_BUTTON_2'))

WebUI.click(findTestObject('Object Repository/Page_CRA/APEO_label_Document Type_1'))

WebUI.click(findTestObject('Object Repository/Page_CRA/APEO_li_factsheet'))

WebUI.sendKeys(findTestObject('Object Repository/Page_CRA/APEO_label_Document Title_1'), 'TEST TEXT')

WebUI.uploadFile(findTestObject('Object Repository/Page_CRA/span_Choose'), 'C:\\Users\\pisy\\Desktop\\myslot.txt')

WebUI.click(findTestObject('Object Repository/Page_CRA/button_Confirm'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_Finish'))

WebUI.verifyElementText(findTestObject('Object Repository/Page_CRA/h3_Submitted Successfully'), 'Submitted Successfully')

WebUI.takeScreenshot()

WebUI.click(findTestObject('Object Repository/Page_CRA/button_OK'))

