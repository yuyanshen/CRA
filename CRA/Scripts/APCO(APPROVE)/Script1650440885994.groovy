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

WebUI.click(findTestObject('Object Repository/Page_CRA/a_AP CO (approval) info'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_Next'))

WebUI.setText(findTestObject('Object Repository/object/input_APTITLE'), 'AUTOTEST')

WebUI.click(findTestObject('Object Repository/Page_CRA/li_Email Address(es) for CC notification_p-_b7baaa'))

WebUI.setText(findTestObject('Object Repository/Page_CRA/input_Email Address(es) for CC notification_58caa5'), 'PISY@AZAAS.COM')

WebUI.click(findTestObject('Object Repository/Page_CRA/div_Is it an amendment application (For ame_bf91f3'))

WebUI.setText(findTestObject('Object Repository/Page_CRA/input_Please specify the approved applicati_0a7b7f'), '1234567')

WebUI.setText(findTestObject('Object Repository/Page_CRA/button_1'), '21 Apr 2024')

WebUI.setText(findTestObject('Object Repository/Page_CRA/AP end date'), '21 Apr 2024')

WebUI.click(findTestObject('Object Repository/Page_CRA/All AP venues INPUT'), FailureHandling.STOP_ON_FAILURE)

WebUI.click(findTestObject('Object Repository/Page_CRA/li_High Limit Gaming Area'))

WebUI.click(findTestObject('Object Repository/Page_CRA/div_empty3453226'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_Promotion with multiple runs'))

WebUI.click(findTestObject('Object Repository/Page_CRA/div_Advertising and Promotion (AP)AP titleE_d374d1'))

WebUI.click(findTestObject('Object Repository/object/All AP venues'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_Singapore Citizens or Permanent Residents'))

WebUI.click(findTestObject('Object Repository/Page_CRA/div_Advertising and Promotion (AP)AP titleE_d374d1'))

WebUI.click(findTestObject('Object Repository/object/AP target'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_Tourists as defined within the Casino Co_0d97eb'))

WebUI.click(findTestObject('Object Repository/Page_CRA/AP button_Add1'))

WebUI.click(findTestObject('Object Repository/Page_CRA/Entitlement'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_Rewards with non-negotiable features'))

WebUI.click(findTestObject('Object Repository/object/Entitlement can be used at these locations'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_Outside of the casino, within the Integr_a03684'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_Confirm'))

WebUI.click(findTestObject('Object Repository/object/AP button_Add2'))

WebUI.click(findTestObject('Object Repository/Page_CRA/span_Select Communication channel'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_Mascots'))

WebUI.setText(findTestObject('Object Repository/Page_CRA/input_AP ADD 2 STARDATE'), '21 Apr 2024')

WebUI.setText(findTestObject('Object Repository/object/input_AP ADD 2 END DATE'), '21 Apr 2024')

WebUI.click(findTestObject('Object Repository/Page_CRA/div_Communication Channel'))

WebUI.click(findTestObject('Object Repository/Page_CRA/div_Location_p-checkbox-box'))

WebUI.click(findTestObject('Object Repository/object/div_Location_p-checkbox-box654214'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_Confirm'))

WebUI.setText(findTestObject('Object Repository/Page_CRA/textarea_AP detailsdescription_p-inputtexta_da871a'), 'TEST')

WebUI.click(findTestObject('Object Repository/Page_CRA/button_Next'))

WebUI.click(findTestObject('Object Repository/object/AP button_Add3'))

WebUI.click(findTestObject('Object Repository/Page_CRA/Entitlement'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_Internet (e.g. Integrated Resort general_526acd'))

WebUI.setText(findTestObject('Object Repository/object/Document Title'), '0')

WebUI.uploadFile(findTestObject('Object Repository/Page_CRA/span_Choose'), 'C:\\Users\\pisy\\Desktop\\myslot.txt')

WebUI.click(findTestObject('Object Repository/Page_CRA/button_Confirm'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_Next'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_Finish'))

WebUI.verifyElementText(findTestObject('Object Repository/Page_CRA/h3_Submitted Successfully'), 'Submitted Successfully')

WebUI.click(findTestObject('Object Repository/Page_CRA/button_OK'))

