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

WebUI.click(findTestObject('Object Repository/Page_CRA/CO Contribution to causes info'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_Next'))

WebUI.setText(findTestObject('Object Repository/Page_CRA/inPUT_SCC_Application title'), 'TEST')

WebUI.setText(findTestObject('Object Repository/Page_CRA/input_APCO title'), 'pisy@azaas.com')

WebUI.click(findTestObject('Object Repository/Page_CRA/button_SCC_Contribution start date'))

WebUI.click(findTestObject('Object Repository/Page_CRA/span_20'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_SCC_Contribution end date (1)'))

WebUI.click(findTestObject('Object Repository/Page_CRA/span_20'))

WebUI.click(findTestObject('Object Repository/Page_CRA/SCC_label_No_1'))

WebUI.click(findTestObject('Object Repository/Page_CRA/SCC_label_No_2'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_SCC_Event start date'))

WebUI.click(findTestObject('Object Repository/Page_CRA/span_20'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_SCC__Event end date'))

WebUI.click(findTestObject('Object Repository/Page_CRA/span_20'))

WebUI.click(findTestObject('Object Repository/Page_CRA/All Contribution venues involved'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_Outside the casino (within the Integrate_0261dc'))

WebUI.click(findTestObject('Object Repository/Page_CRA/Contribution type'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_Donations'))

WebUI.setText(findTestObject('Object Repository/Page_CRA/li_RecipientsBeneficiaries'), 'test')

WebUI.click(findTestObject('Object Repository/Page_CRA/Items Contributed'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_Cash'))

WebUI.click(findTestObject('Object Repository/Page_CRA/div_Application titleEmail Address(es) for _9d86d9'))

WebUI.click(findTestObject('Object Repository/Page_CRA/div_SCC_Item can be used at these locations'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_Outside the Integrated Resort only'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_SCC_Add_1'))

WebUI.click(findTestObject('Object Repository/Page_CRA/span_SCC_Select Communication channel_p-dropdow_079fb2'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_Mascots'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_Confirm'))

WebUI.setText(findTestObject('Object Repository/Page_CRA/textarea_CSS_Contribution detailsdescription_p-_240881'), 'TEST')

WebUI.click(findTestObject('Object Repository/Page_CRA/SCC_label_No_3'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_Next'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_SCC_Add_2'))

WebUI.click(findTestObject('Object Repository/Page_CRA/span_SCC_Document Type'))

WebUI.click(findTestObject('Object Repository/Page_CRA/li_SCC_Declaration Form'))

WebUI.setText(findTestObject('Object Repository/Page_CRA/li_Document Title'), 'SCCTEST')

WebUI.uploadFile(findTestObject('Object Repository/Page_CRA/span_Choose'), 'C:\\Users\\pisy\\Desktop\\123.txt')

WebUI.click(findTestObject('Object Repository/Page_CRA/SCC button_Confirm_2'))

WebUI.click(findTestObject('Object Repository/Page_CRA/button_SCC_Finish'))

WebUI.verifyElementText(findTestObject('Object Repository/Page_CRA/h3_Submitted Successfully'), 'Submitted Successfully')

