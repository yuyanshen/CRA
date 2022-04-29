import { test, expect, Page } from '@playwright/test';

//const serverUrl = 'https://lab.azaas.com:56668/';
const serverUrl = 'https://portal.cra.azaas.online/';
//const serverUrl = 'http://localhost:8080/';
//const identityServerUrl = 'https://demo.azaas.online/';
const identityServerUrl = 'https://admin.cra.azaas.online/';
const infoPageUrl = 'aPCoApprovalInfo';
const appPageUrl = 'aPCoApproval';
const applicantEmail = 'cra_mbs@outlook.com';
//const applicantEmail = 'cra_rws@outlook.com';
const inspectorEmail = 'cra_insp2@outlook.com';
const approverEmail = 'cra_appr1@outlook.com';
const pw = 'aZaaS@CRA';

var dateNow = '';
var appNo = '';
var appNoR01 = '';
var appNoDatePart = '';
var startDateWithin21 = '';
var startDateAfter21 = '';
var endDate = '';

test.describe('AP CO Approval', async () => {

    function getLocaleDateString(date: Date) {
        return date.getDate().toString().padStart(2, "0") + '/' + (date.getMonth() + 1).toString().padStart(2, "0") + '/' + date.getFullYear().toString();
    };

    var date = new Date();
    dateNow = date.getFullYear().toString().substring(2, 4) + (date.getMonth() + 1).toString().padStart(2, "0") + date.getDate().toString().padStart(2, "0") + date.getHours().toString().padStart(2, "0") + date.getMinutes().toString().padStart(2, "0") + date.getSeconds().toString().padStart(2, "0");

    appNoDatePart = dateNow.substring(0, 6);

    //Set 20 days from today
    date.setDate(date.getDate() + 21);
    startDateWithin21 = getLocaleDateString(date);

    //Set 22 days from today
    date.setDate(date.getDate() + 1);
    startDateAfter21 = getLocaleDateString(date);

    //Set 30 days from today
    date.setDate(date.getDate() + 8);
    endDate = getLocaleDateString(date);

    let page: Page;
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
    });

    async function login(email: string) {
        // Go to serverUrl
        await page.goto(serverUrl);
        // Go to https://portal.cra.azaas.online/login
        await page.goto(serverUrl+'login');

        // Click [placeholder="Email"]
        await page.locator('[placeholder="Email"]').click();
        // Fill [placeholder="Email"]
        await page.locator('[placeholder="Email"]').fill(email);
        // Press Tab
        await page.locator('[placeholder="Email"]').press('Tab');
        // Fill [placeholder="Password"]
        await page.locator('[placeholder="Password"]').fill(pw);

        // Click button:has-text("LOGIN")
        await Promise.all([
            page.waitForNavigation(/*{ url: serverUrl }*/),
            page.locator('button:has-text("Sign In")').click()
        ]);

        // Go to serverUrl
        await page.goto(serverUrl);

        // Assert URL
        const url = page.url();
        expect(url).toContain(serverUrl);
    }

    async function logout() {

        // Click button:has-text("Logout")
        await Promise.all([
            page.waitForNavigation(),
            page.locator('button:has-text("Logout")').click()
        ]);

    }

    async function gotoPage(pageUrl: string) {

        // Click button:has-text("Logout")
        await Promise.all([
            page.waitForNavigation(),
            page.goto(pageUrl)
        ]);

    }

    async function openTask(task: string) {
        // Go to serverUrl
        await gotoPage(serverUrl);

        console.log('appNo', appNo);

        // Click text=AP CO Approval - {{appNo}} >> span
        await Promise.all([
            page.waitForNavigation(/*{ url: serverUrl }*/),
            page.locator(task).click()
        ]);
    }

    test('Console @console', async ({ browserName }) => {
        console.log("dateNow ", dateNow);
        console.log("appNoDatePart ", appNoDatePart);
        console.log("startDateWithin21 ", startDateWithin21);
        console.log("startDateAfter21 ", startDateAfter21);
        console.log("endDate ", endDate);
    });

    test('Login as Applicant @applicant @applvalidate @applsubmit', async ({ browserName }) => {

        await login(applicantEmail);

    });

    test('Validate AP CO Approval form @applicant @applvalidate', async ({ browserName }) => {

        // Go to serverUrl
        await page.goto(serverUrl);


        // Click text=AP CO (approval) info
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://lab.azaas.com:56668/aPCoApprovalInfo' }*/),
            page.locator('text=AP CO (approval) info').click()
        ]);

        // Take screenshot of info page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 01-01-cra-apCoApproval-Info.png', fullPage: true })

        // Click button:has-text("Next")
        await page.locator('button:has-text("Next")').click();

        // Take screenshot of application page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 01-02-cra-apCoApproval-Application.png', fullPage: true })

        // Click button:has-text("Next")
        await page.locator('button:has-text("Next")').click();

        // Take screenshot of attachment page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 01-03-cra-apCoApproval-Attachment.png', fullPage: true })

        // Click button:has-text("Next")
        await page.locator('button:has-text("Next")').click();

        // Take screenshot of preview page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 01-04-cra-apCoApproval-Preview.png', fullPage: true })

        // Click button:has-text("Finish")
        await page.locator('button:has-text("Finish")').click();

        // Click text=Validation is not successful to be visible
        await expect(page.locator('text=Validation is not successful')).toBeVisible();

        // Take screenshot of validation error page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 01-05-cra-apCoApproval-ValidationError.png', fullPage: false })

        // Click button:has-text("Previous")
        await page.locator('button:has-text("Previous")').click();

        // Expect text=AddDocument TypeDocument TitleDocument NameActionThis field is required >> small to be visible
        await expect(page.locator('text=AddDocument TypeDocument TitleFile AttachmentActionThis field is required >> small')).toBeVisible();

        // Take screenshot of attachment error page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 01-06-cra-apCoApproval-AttachmentError.png', fullPage: true })

        // Click button:has-text("Previous")
        await page.locator('button:has-text("Previous")').click();

        // Expect text=AP titleThis field is required >> small to be visible
        await expect(page.locator('text=AP titleThis field is required >> small')).toBeVisible();

        // Expect text=AP start date This field is required >> small to be visible
        await expect(page.locator('text=AP start date This field is required >> small')).toBeVisible();

        // Expect text=AP end date This field is required >> small to be visible
        await expect(page.locator('text=AP end date This field is required >> small')).toBeVisible();

        // Expect text=All AP venues/platforms involvedemptyThis field is required >> small to be visible
        await expect(page.locator('text=All AP venues/platforms involvedemptyThis field is required >> small')).toBeVisible();

        // Expect text=AP typeemptyThis field is required >> small to be visible
        await expect(page.locator('text=AP typeemptyThis field is required >> small')).toBeVisible();

        // Expect text=AddDocument TypeDocument TitleDocument NameActionThis field is required >> small to be visible
        await expect(page.locator('text=AP target audiencesemptyThis field is required >> small')).toBeVisible();

        // Expect text=Qualifying criteriaemptyThis field is required >> small to be visible
        await expect(page.locator('text=Qualifying criteriaemptyThis field is required >> small')).toBeVisible();

        // Expect text=EntitlementemptyThis field is required >> small to be visible
        await expect(page.locator('text=EntitlementemptyThis field is required >> small')).toBeVisible();

        // Expect text=Entitlement can be used at these locationsp-emptylabelThis field is required >> small to be visible
        await expect(page.locator('text=Entitlement can be used at these locationsp-emptylabelThis field is required >> small')).toBeVisible();

        // Click .p-tabview-panel div:nth-child(2) .main-section-content small >> nth=0
        await page.locator('.p-tabview-panel div:nth-child(2) .main-section-content small').first().click();

        // Expect text=AP details/description:This field is required >> small to be visible
        await expect(page.locator('text=AP details/description:This field is required >> small')).toBeVisible();

        // Click div[role="radio"] >> nth=0
        await page.locator('div[role="radio"]').first().click();

        // Expect text=Please specify relevant applicationThis field is required >> small to be visible
        await expect(page.locator('text=Please specify relevant applicationThis field is required >> small')).toBeVisible();

        // Take screenshot of application error page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 01-07-cra-apCoApproval-ApplicationError.png', fullPage: true })

    });

    test('Validate AP CO Approval form - Others Please Specify @applicant @applvalidate', async ({ browserName }) => {

        // Click text=All AP venues/platforms involvedemptyThis field is required
        await page.locator('text=All AP venues/platforms involvedemptyThis field is required').click();
        // Click [aria-label="Others"]
        await page.locator('[aria-label="Others"]').click();
        // Click .p-multiselect-label >> nth=0
        await page.locator('.p-multiselect-label').first().click();

        // Expect text=Others, please specify:This field is required >> small to be visible
        await expect(page.locator('text=Others, please specify:This field is required >> small')).toBeVisible();
        // Click text=Others, please specify:This field is required >> small
        await page.locator('text=Others, please specify:This field is required >> small').click();

        // Click text=AP typeemptyThis field is required
        await page.locator('text=AP typeemptyThis field is required').click();
        // Click [aria-label="Others"]
        await page.locator('[aria-label="Others"]').click();
        // Click .p-multiselect.p-component.p-inputwrapper.p-inputwrapper-filled.p-inputwrapper-focus .p-multiselect-label-container .p-multiselect-label
        await page.locator('.p-multiselect.p-component.p-inputwrapper.p-inputwrapper-filled.p-inputwrapper-focus .p-multiselect-label-container .p-multiselect-label').click();

        // Expect text=Others, please specify:This field is required >> nth=1 to be visible
        await expect(page.locator('text=Others, please specify:This field is required').nth(1)).toBeVisible();
        // Click text=Others, please specify:This field is required >> nth=1
        await page.locator('text=Others, please specify:This field is required').nth(1).click();

        // Click text=AP target audiencesemptyThis field is required
        await page.locator('text=AP target audiencesemptyThis field is required').click();
        // Click [aria-label="Others"]
        await page.locator('[aria-label="Others"]').click();
        // Click .p-multiselect.p-component.p-inputwrapper.p-inputwrapper-filled.p-inputwrapper-focus .p-multiselect-label-container .p-multiselect-label
        await page.locator('.p-multiselect.p-component.p-inputwrapper.p-inputwrapper-filled.p-inputwrapper-focus .p-multiselect-label-container .p-multiselect-label').click();

        // Expect text=Others, please specify:This field is required >> nth=2 to be visible
        await expect(page.locator('text=Others, please specify:This field is required').nth(2)).toBeVisible();
        // Click text=Others, please specify:This field is required >> nth=2
        await page.locator('text=Others, please specify:This field is required').nth(2).click();

        // Click text=Qualifying criteriaemptyThis field is required
        await page.locator('text=Qualifying criteriaemptyThis field is required').click();
        // Click [aria-label="Others"]
        await page.locator('[aria-label="Others"]').click();
        // Click .p-multiselect.p-component.p-inputwrapper.p-inputwrapper-filled.p-inputwrapper-focus .p-multiselect-label-container .p-multiselect-label
        await page.locator('.p-multiselect.p-component.p-inputwrapper.p-inputwrapper-filled.p-inputwrapper-focus .p-multiselect-label-container .p-multiselect-label').click();

        // Expect text=Others, please specify:This field is required >> nth=3 to be visible
        await expect(page.locator('text=Others, please specify:This field is required').nth(3)).toBeVisible();
        // Click text=Others, please specify:This field is required >> nth=3
        await page.locator('text=Others, please specify:This field is required').nth(3).click();

        // Click text=EntitlementemptyThis field is required
        await page.locator('text=EntitlementemptyThis field is required').click();
        // Click [aria-label="Others"]
        await page.locator('[aria-label="Others"]').click();
        // Click .p-multiselect.p-component.p-inputwrapper.p-inputwrapper-filled.p-inputwrapper-focus .p-multiselect-label-container .p-multiselect-label
        await page.locator('.p-multiselect.p-component.p-inputwrapper.p-inputwrapper-filled.p-inputwrapper-focus .p-multiselect-label-container .p-multiselect-label').click();

        // Expect text=Merchandise/Souvenir or Others, please specify:This field is required >> small to be visible
        await expect(page.locator('text=Merchandise/Souvenir or Others, please specify:This field is required >> small')).toBeVisible();
        // Click text=Merchandise/Souvenir or Others, please specify:This field is required >> small
        await page.locator('text=Merchandise/Souvenir or Others, please specify:This field is required >> small').click();

        // Take screenshot of application with others error page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 01-08-cra-apCoApproval-ApplicationOthersError.png', fullPage: true })

    });

    test('Validate AP CO Approval form - Communications Section @applicant @applvalidate', async ({ browserName }) => {

        // Click button:has-text("Add") >> nth=0
        await page.locator('button:has-text("Add")').first().click();
        // Click button:has-text("Confirm")
        await page.locator('button:has-text("Confirm")').click();

        // Expect text=Communication channelSelect Communication channelThis field is required >> small to be visible
        await expect(page.locator('text=Communication channelSelect Communication channelThis field is required >> small')).toBeVisible();

        // Expect div[role="dialog"] >> text=Start Date This field is required >> small to be visible
        await expect(page.locator('div[role="dialog"] >> text=Start Date This field is required >> small')).toBeVisible();

        // Expect div[role="dialog"] >> text=End Date This field is required >> small to be visible
        await expect(page.locator('div[role="dialog"] >> text=End Date This field is required >> small')).toBeVisible();

        // Expect text=LocationThis field is required >> small to be visible
        await expect(page.locator('text=LocationThis field is required >> small')).toBeVisible();

        // Expect text=Communication channelSelect Communication channelThis field is required to be visible
        await expect(page.locator('text=Communication channelSelect Communication channelThis field is required')).toBeVisible();

        // Click .p-dialog-header
        await page.locator('.p-dialog-header').click();
        // Press Tab
        await page.locator('body:has-text("A Singapore Government Agency WebsiteHomeLogoutHomeDashboardEServicesAP CO (appr")').press('Tab');
        // Press Space
        await page.keyboard.press("Space");

        // Click [aria-label="Integrated\ Resort\ general\ website"]
        await page.locator('[aria-label="Integrated\\ Resort\\ general\\ website"]').click();

        // Expect text=Publication Date And Time This field is required >> small to be visible
        await expect(page.locator('text=Publication Date And Time This field is required >> small')).toBeVisible();

        // Expect text=Details of Publication MediumThis field is required >> small to be visible
        await expect(page.locator('text=Details of Publication MediumThis field is required >> small')).toBeVisible();

        // Take screenshot of communication panel error page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 01-09-cra-apCoApproval-CommunicationPanelError.png', fullPage: true })

    });

    test('Validate AP CO Approval form - Attachment Section @applicant @applvalidate', async ({ browserName }) => {

        // Click button:has-text("Cancel")
        await page.locator('button:has-text("Cancel")').click();
        // Click button:has-text("Next")
        await page.locator('button:has-text("Next")').click();
        // Click text=AddDocument TypeDocument TitleFile AttachmentAction >> button
        await page.locator('text=AddDocument TypeDocument TitleFile AttachmentAction >> button').first().click();

        // Click button:has-text("Confirm")
        await page.locator('button:has-text("Confirm")').click();

        // Expect text=Document Typep-emptylabelThis field is required >> small to be visible
        await expect(page.locator('text=Document Typep-emptylabelThis field is required >> small')).toBeVisible();

        // Expect text=Document TitleThis field is required >> small to be visible
        await expect(page.locator('text=Document TitleThis field is required >> small')).toBeVisible();

        // Expect text=File AttachmentChoose Drag and drop files to here to upload.This field is requir >> small to be visible
        await expect(page.locator('text=File AttachmentChoose Drag and drop files to here to upload.This field is requir >> small')).toBeVisible();

        // Take screenshot of attachment panel error page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 01-10-cra-apCoApproval-AttachmentPanelError.png', fullPage: true })
    });


    test('Check 21 days rule @applicant @applvalidate', async ({ browserName }) => {

        console.log('Do this test after validation error is fixed');

    });


    test('Submit AP CO Approval form @applicant @applsubmit', async ({ browserName }) => {

        // Go to serverUrl
        await page.goto(serverUrl + appPageUrl);

        // Click #wizard-tabview div:has-text("AP title") >> nth=4
        await page.locator('#wizard-tabview div:has-text("AP title")').nth(4).click();
        // Fill .p-inputtext >> nth=0
        await page.locator('.p-inputtext').first().fill('A&P Title ' + dateNow);
        // Click text=AP titleEmail Address(es) for CC notificationIs it an amendment application (For >> li
        await page.locator('text=AP titleEmail Address(es) for CC notificationIs it an amendment application (For >> li').click();
        // Fill input[role="searchbox"]
        await page.locator('input[role="searchbox"]').fill('choon@mail.com');
        // Press Enter
        await page.locator('input[role="searchbox"]').press('Enter');
        // Click text=Is it an amendment application (For amendments to an approved application)YesNo
        await page.locator('text=Is it an amendment application (For amendments to an approved application)YesNo').click();
        // Click .field div:nth-child(3) >> nth=0
        await page.locator('.field div:nth-child(3)').first().click();
        // Click div[role="radio"] >> nth=1
        await page.locator('div[role="radio"]').nth(1).click();
        // Click [aria-label=""] >> nth=0
        await page.locator('[aria-label=""]').first().click();

        // Click #wizard-tabview div:has-text("AP start date") >> nth=4
        await page.locator('#wizard-tabview div:has-text("AP start date")').nth(4).click();
        // Fill .p-calendar .p-inputtext >> nth=0
        await page.locator('.p-calendar .p-inputtext').first().fill(startDateAfter21);
        // Press Tab
        await page.locator('.p-calendar .p-inputtext').first().press('Tab');
        // Fill .p-calendar.p-component.p-inputwrapper.p-calendar-w-btn.p-inputwrapper-focus .p-inputtext
        await page.locator('.p-calendar.p-component.p-inputwrapper.p-calendar-w-btn.p-inputwrapper-focus .p-inputtext').fill(endDate);

        // Click text=All AP venues/platforms involvedempty
        await page.locator('text=All AP venues/platforms involvedempty').click();
        // Click [aria-label="Mass\ Gaming\ Area"] div >> nth=1
        await page.locator('[aria-label="Mass\\ Gaming\\ Area"] div').nth(1).click();
        // Click [aria-label="Others"] div >> nth=1
        await page.locator('[aria-label="Others"] div').nth(1).click();
        // Click text=Mass Gaming AreaOthers
        await page.locator('text=Mass Gaming AreaOthers').click();

        // Click #wizard-tabview div:has-text("Others, please specify:") >> nth=4
        await page.locator('#wizard-tabview div:has-text("Others, please specify:")').nth(4).locator("input").fill('Other venues');

        // Click text=AP typeempty
        await page.locator('text=AP typeempty').click();
        // Click [aria-label="Promotion\ with\ multiple\ runs"]
        await page.locator('[aria-label="Promotion\\ with\\ multiple\\ runs"]').click();
        // Click [aria-label="Job\ Fair"]
        await page.locator('[aria-label="Job\\ Fair"]').click();
        // Click [aria-label="Others"]
        await page.locator('[aria-label="Others"]').click();
        // Click text=Promotion with multiple runsJob FairOthers
        await page.locator('text=Promotion with multiple runsJob FairOthers').click();
        // Press Tab
        await page.locator('text=AP typePromotion with multiple runsJob FairOthers >> input[role="listbox"]').press('Tab');
        // Type
        await page.keyboard.type('Other AP type');

        // Click text=AP target audiencesempty
        await page.locator('text=AP target audiencesempty').click();
        // Click [aria-label="Tourists\ as\ defined\ within\ the\ Casino\ Control\ \(Advertising\)\ Regulations\ 2010"]
        await page.locator('[aria-label="Tourists\\ as\\ defined\\ within\\ the\\ Casino\\ Control\\ \\(Advertising\\)\\ Regulations\\ 2010"]').click();
        // Click [aria-label="Casino\ Loyalty\ Card\ Members\ \(Selected\ membership\ tiers\ only\)"]
        await page.locator('[aria-label="Casino\\ Loyalty\\ Card\\ Members\\ \\(Selected\\ membership\\ tiers\\ only\\)"]').click();
        // Click text=AP target audiencesTourists as defined within the Casino Control (Advertising) R
        await page.locator('text=AP target audiencesTourists as defined within the Casino Control (Advertising) R').click();
        // Press Tab
        await page.locator('text=AP target audiencesTourists as defined within the Casino Control (Advertising) R >> input[role="listbox"]').press('Tab');
        // Type
        await page.keyboard.type('Other AP target audience');

        // Click text=Qualifying criteriaempty
        await page.locator('text=Qualifying criteriaempty').click();
        // Click [aria-label="Wager\ a\ predetermined\ amount\ in\ the\ casino"]
        await page.locator('[aria-label="Wager\\ a\\ predetermined\\ amount\\ in\\ the\\ casino"]').click();
        // Click [aria-label="Earn\ a\ predetermined\ number\ of\ loyalty\ points\ in\ the\ Integrated\ Resort"]
        await page.locator('[aria-label="Earn\\ a\\ predetermined\\ number\\ of\\ loyalty\\ points\\ in\\ the\\ Integrated\\ Resort"]').click();
        // Click [aria-label="Others"]
        await page.locator('[aria-label="Others"]').click();
        // Click text=Wager a predetermined amount in the casinoEarn a predetermined number of loyal
        await page.locator('text=Wager a predetermined amount in the casinoEarn a predetermined number of loyal').click();
        // Press Tab
        await page.locator('text=Qualifying criteriaWager a predetermined amount in the casinoEarn a predetermi >> input[role="listbox"]').press('Tab');
        //Type
        await page.keyboard.type('Other Qualifying criteria');

        // Click text=Entitlementempty
        await page.locator('text=Entitlementempty').click();
        // Click [aria-label="Attractions\/Facilities"]
        await page.locator('[aria-label="Attractions\\/Facilities"]').click();
        // Click [aria-label="Merchandise\/Souvenir"]
        await page.locator('[aria-label="Merchandise\\/Souvenir"]').click();
        // Click [aria-label="Others"]
        await page.locator('[aria-label="Others"]').click();
        // Click text=EntitlementAttractions/FacilitiesMerchandise/SouvenirOthers
        await page.locator('text=EntitlementAttractions/FacilitiesMerchandise/SouvenirOthers').click();
        // Press Tab
        await page.locator('text=EntitlementAttractions/FacilitiesMerchandise/SouvenirOthers >> input[role="listbox"]').press('Tab');
        //Type
        await page.keyboard.type('Other entitlement');

        // Click text=Entitlement can be used at these locationsp-emptylabel
        await page.locator('text=Entitlement can be used at these locationsp-emptylabel').click();
        // Click [aria-label="Outside\ of\ the\ casino\,\ within\ the\ Integrated\ Resort\ only"]
        await page.locator('[aria-label="Outside\\ of\\ the\\ casino\\,\\ within\\ the\\ Integrated\\ Resort\\ only"]').click();
        // Click .p-inputtext.p-component.p-inputnumber-input >> nth=0
        await page.locator('.p-inputtext.p-component.p-inputnumber-input').first().fill("5000");
        // Press Tab
        await page.locator('.p-inputtext.p-component.p-inputnumber-input').first().press('Tab');
        //Type
        await page.keyboard.type('6000');

        // Click button:has-text("Add") >> nth=0
        await page.locator('button:has-text("Add")').first().click();
        // Click text=Communication channelSelect Communication channel
        await page.locator('text=Communication channelSelect Communication channel').click();
        // Click [aria-label="Mascots"]
        await page.locator('[aria-label="Mascots"]').click();
        // Click div[role="dialog"] div:has-text("Start Date") >> nth=2
        await page.locator('div[role="dialog"] div:has-text("Start Date")').nth(2).click();
        // Fill .p-calendar.p-component.p-inputwrapper.p-calendar-w-btn.p-inputwrapper-focus .p-inputtext
        await page.locator('.p-calendar.p-component.p-inputwrapper.p-calendar-w-btn.p-inputwrapper-focus .p-inputtext').fill('15/04/2022');
        // Press Tab
        await page.locator('.p-calendar.p-component.p-inputwrapper.p-calendar-w-btn.p-inputwrapper-focus .p-inputtext').press('Tab');
        // Fill .p-calendar.p-component.p-inputwrapper.p-calendar-w-btn.p-inputwrapper-focus .p-inputtext
        await page.locator('.p-calendar.p-component.p-inputwrapper.p-calendar-w-btn.p-inputwrapper-focus .p-inputtext').fill('22/04/2022');

        // Click div:has-text("Publication Date And Time") >> nth=4
        await page.locator('div:has-text("Publication Date And Time")').nth(4).click();
        // Fill .p-calendar.p-component.p-inputwrapper.p-calendar-w-btn.p-inputwrapper-focus .p-inputtext
        await page.locator('.p-calendar.p-component.p-inputwrapper.p-calendar-w-btn.p-inputwrapper-focus .p-inputtext').fill('16/04/2022 12:00:00');
        // Press Tab
        await page.locator('.p-calendar.p-component.p-inputwrapper.p-calendar-w-btn.p-inputwrapper-focus .p-inputtext').press('Tab');
        // Click div:has-text("Details of Publication Medium") >> nth=4
        await page.locator('div:has-text("Details of Publication Medium")').nth(4).click();
        //Type
        await page.keyboard.type('Application details');
        // Press Tab
        await page.locator('div:has-text("Details of Publication Medium")').nth(4).press('Tab');
        //        await page.locator('text=LocationMass Gaming Area >> div[role="checkbox"]').nth(1).click();
        await page.locator('text=LocationMass Gaming Area >> div[role="checkbox"]').first().click();
        //        await page.locator('text=Communication Channel Target AudienceTourists as defined within the Casino Contr  >> div[role="checkbox"]').nth(2).click();
        await page.locator('text=Communication Channel Target AudienceTourists as defined within the Casino Contr  >> div[role="checkbox"]').first().click();
        // Click button:has-text("Confirm")
        await page.locator('button:has-text("Confirm")').click();

        // Click #wizard-tabview div:has-text("AP details/description:") >> nth=4
        await page.locator('#wizard-tabview div:has-text("AP details/description:")').nth(4).click();
        // Fill textarea[type="text"]
        await page.locator('textarea[type="text"]').fill('More details about AP');

        //Take screenshot of application page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 09-01-cra-apCoApproval-Apply.png', fullPage: true })

        // Click button:has-text("Next")
        await page.locator('button:has-text("Next")').click();

        // Click text=AddDocument TypeDocument TitleDocument NameAction >> button
        await page.locator('text=AddDocument TypeDocument TitleFile AttachmentAction >> button').first().click();


        // Click div[role="dialog"] div:has-text("Upload File")
        await page.locator('div[role="dialog"] div:has-text("Upload File")').click();
        // Press Tab
        await page.locator('body:has-text("A Singapore Government Agency WebsiteHomeLogoutHomeDashboardEServicesAP CO (appr")').press('Tab');
        // Press Space
        await page.keyboard.press('Space');

        // Click text=Factsheet/Terms and Conditions/Information Sheet
        await page.locator('text=Factsheet/Terms and Conditions/Information Sheet').click();
        // Fill text=Document TypeFactsheet/Terms and Conditions/Information SheetDocument TitleFile  >> input[type="text"] >> nth=1
        await page.locator('text=Document TypeFactsheet/Terms and Conditions/Information SheetDocument TitleFile  >> input[type="text"]').nth(1).fill('Title of document');

        // Upload Test.docx
        await page.locator('span:has-text("Choose")').first().locator("input").setInputFiles('Test.docx');

        // Assert here instead
        await page.waitForSelector('span:has-text("Test.docx")');

        // Click button:has-text("Confirm")
        await page.locator('button:has-text("Confirm")').click();

        //Take screenshot of attachment page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 09-02-cra-apCoApproval-Attachment.png', fullPage: true })


        // Click button:has-text("Next")
        await page.locator('button:has-text("Next")').click();

        //Take screenshot of preview page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 09-03-cra-apCoApproval-Preview.png', fullPage: true })

        // Click button:has-text("Finish")
        await page.locator('button:has-text("Finish")').click();

        // await page.waitForLoadState();

        await page.waitForSelector('h3:has-text("Submitted Successfully")');

        // Find appNo using the date part
        appNo = await page.$eval('text=' + appNoDatePart + '/', el => el.textContent.trim());

        console.log('appNo', appNo);

        //Take screenshot of submitted page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 09-04-cra-apCoApproval-Submission.png', fullPage: true })

    });

    test('Logout as applicant @applicant @applsubmit @applvalidate', async ({ browserName }) => {

        await logout();

    });

    test('Login as Inspector @inspector @inspvalidate @inspresubmit', async ({ browserName }) => {

        await login(inspectorEmail);


    });

    test('Inspector Open Task @inspector @inspvalidate @inspresubmit', async ({ browserName }) => {

        await openTask('text=AP CO Approval - ' + appNo + 'Inspection');

    });

    test('Validate AP CO Approval form @inspector @inspvalidate', async ({ browserName }) => {

        await page.waitForSelector('#wizard-tabview div:has-text("Application number") > .p-inputtext');

        // Expect #wizard-tabview div:has-text("Application number") > .p-inputtext to have value appNo
        await expect(page.locator('#wizard-tabview div:has-text("Application number") > .p-inputtext')).toHaveValue(appNo);

        // Expect #wizard-tabview div:has-text("AP title") > .p-inputtext to have value appNo
        await expect(page.locator('#wizard-tabview div:has-text("AP title") > .p-inputtext')).toHaveValue('A&P Title ' + dateNow);

        // Expect start date to equal startDateAfter21
        const startDateField = await page.$eval('#wizard-tabview div:has-text("AP start date") > .p-calendar > .p-inputtext', el => el.value);
        expect(startDateField).toEqual(startDateAfter21);

        // Expect end date to equal endDate
        const endDateField = await page.$eval('#wizard-tabview div:has-text("AP end date") > .p-calendar > .p-inputtext', el => el.value);
        expect(endDateField).toEqual(endDate);

        // Expect text=All AP venues/platforms involvedMass Gaming AreaOthers to be visible
        await expect(page.locator('text=All AP venues/platforms involvedMass Gaming AreaOthers')).toBeVisible();
        //const otherVenue = await page.$eval('div:below(:text("All AP venues/platforms involvedMass Gaming AreaOthers")) > .p-inputtext', el => el.value);
        const otherVenue = await page.$eval('div:below(:text("All AP venues/platforms involved")) > .p-inputtext', el => el.value);
        //console.log("otherVenue ", otherVenue);
        expect(otherVenue).toEqual("Other venues");

        // Expect text=AP typePromotion with multiple runsJob FairOthers to be visible
        await expect(page.locator('text=AP typePromotion with multiple runsJob FairOthers')).toBeVisible();

        //const otherType = await page.$eval('div:below(:text("AP typePromotion with multiple runsJob FairOthers")) > .p-inputtext', el => el.value);
        const otherType = await page.$eval('div:below(:text("AP type")) > .p-inputtext', el => el.value);
        //console.log("otherType ", otherType);
        expect(otherType).toEqual("Other AP type");


        // Expect text=AP target audiencesTourists as defined within the Casino Control (Advertising) R to be visible
        await expect(page.locator('text=AP target audiencesTourists as defined within the Casino Control (Advertising) R')).toBeVisible();

        //await expect(page.locator(':text("Casino Loyalty Card Members (Selected membership tiers only), please specify:"):near(:text("Other AP target audience"))')).toBeVisible();
        const otherAudience = await page.$eval('#wizard-tabview div:has-text("Casino Loyalty Card Members (Selected membership tiers only), please specify:") > .p-inputtext', el => el.value);
        //console.log("otherAudience ", otherAudience);
        expect(otherAudience).toEqual("Other AP target audience");

        await expect(page.locator('text=Qualifying criteriaWager a predetermined amount in the casinoEarn a predetermine')).toBeVisible();
        const otherCriteria = await page.$eval('div:below(:text("Qualifying criteria")) > .p-inputtext', el => el.value);
        //console.log("otherCriteria ", otherCriteria);
        expect(otherCriteria).toEqual("Other Qualifying criteria");
        //   // Click text=Qualifying criteriaWager a predetermined amount in the casinoEarn a predetermine
        //   await page.locator('text=Qualifying criteriaWager a predetermined amount in the casinoEarn a predetermine').click();

        await expect(page.locator('text=EntitlementAttractions/FacilitiesMerchandise/SouvenirOthers')).toBeVisible();
        const otherEntitlement = await page.$eval('#wizard-tabview div:has-text("Merchandise/Souvenir or Others, please specify:") > .p-inputtext', el => el.value);
        //console.log("otherEntitlement ", otherEntitlement);
        expect(otherEntitlement).toEqual("Other entitlement");

        const amountField = await page.$eval('#wizard-tabview div:has-text("Amount") > .p-inputnumber > .p-inputtext', el => el.value);
        //console.log("amountField ", amountField);
        expect(amountField).toEqual("5,000");

        const pointsField = await page.$eval('#wizard-tabview div:has-text("Loyalty Points") > .p-inputnumber > .p-inputtext', el => el.value);
        //console.log("pointsField ", pointsField);
        expect(pointsField).toEqual("6,000");

        await expect(page.locator('text=Communication ChannelMascots')).toBeVisible();

        await expect(page.locator('text=Start Date15/04/2022')).toBeVisible();

        await expect(page.locator('text=End Date22/04/2022')).toBeVisible();

        await expect(page.locator('text=LocationMass Gaming Area')).toBeVisible();

        await expect(page.locator('text=Communication Channel Target AudienceTourists as defined within the Casino Contr')).toBeVisible();

        const descriptionField = await page.$eval('#wizard-tabview div:has-text("AP details/description:") > .p-inputtextarea', el => el.value);
        expect(descriptionField).toEqual("More details about AP");

        await expect(page.locator('text=Document TypeFactsheet/Terms and Conditions/Information Sheet')).toBeVisible();

        await expect(page.locator('text=Document TitleTitle of document')).toBeVisible();

        await expect(page.locator('text=File Attachment Test.docx')).toBeVisible();

        // Click button:has-text("Send to Approver")
        await page.locator('button:has-text("Send to Approver")').click();

        // Click text=Validation is not successful to be visible
        await expect(page.locator('text=Validation is not successful')).toBeVisible();

        // Click text=RecommendationRecommendationThis field is required >> small to be visible
        await expect(page.locator('text=RecommendationRecommendationThis field is required >> small')).toBeVisible();

        // Click text=Select ApproverThis field is required >> small to be visible
        await expect(page.locator('text=Select ApproverThis field is required >> small')).toBeVisible();

        // Take screenshot of home page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 12-01-cra-apCoApproval-InspFormError.png', fullPage: true })

    });

    test('Inspector Require Resubmission @inspector @inspresubmit', async ({ browserName }) => {

        // Click text=Comments for ApplicantRich Text EditorHeadingParagraphParagraphHeading 1Heading  >> p
        await page.locator('text=Comments for ApplicantRich Text EditorHeadingParagraphParagraphHeading 1Heading  >> p').click();
        // Type
        await page.keyboard.type('Comment by Inspector for Applicant to resubmit');

        // Upload Test.docx
        await page.locator('.p-button.p-component.p-fileupload-choose').first().locator("input").setInputFiles('Test.docx');

        // Assert here instead
        await page.waitForSelector('span:has-text("Test.docx")');

        // Click button:has-text("Require Resubmission")
        await page.locator('button:has-text("Require Resubmission")').click();

    });

    test('Logout as Inspector @inspector @inspresubmit ', async ({ browserName }) => {

        await logout();

    });

    test('Login as Applicant @applicant @applresubmit', async ({ browserName }) => {

        await login(applicantEmail);

    });

    test('Applicant Open Task @applicant @applresubmit', async ({ browserName }) => {

        await openTask('text=AP CO Approval - ' + appNo + 'Resubmission');
    });

    test('Applicant Check Task @applicant @applresubmit', async ({ browserName }) => {

        await expect(page.locator('text=Comment by Inspector for Applicant to resubmit')).toBeVisible();

        await expect(page.locator('span:has-text("Test.docx")')).toBeVisible();
    });

    test('Applicant Amend Task @applicant @applresubmit', async ({ browserName }) => {

        // Fill .required .p-inputtext >> nth=0
        await page.locator('.required .p-inputtext').first().fill('A&P Title ' + dateNow + ' amended 1');

        // Fill textarea[type="text"]
        await page.locator('textarea[type="text"]').fill('More details about AP - also amended');

        //Take screenshot of application page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 18-01-cra-apCoApproval-Apply.png', fullPage: true })

        // Click button:has-text("Next")
        await page.locator('button:has-text("Next")').click();


        // Click text=ActionDelete >> button
        await page.locator('text=ActionDelete >> button').click();
        // Click button:has-text("Yes")
        await page.locator('button:has-text("Yes")').click();

        // Click text=AddDocument TypeDocument TitleFile AttachmentActionDocument TypeFactsheet/Terms  >> button
        await page.locator('text=AddDocument TypeDocument TitleFile AttachmentActionDocument TypeFactsheet/Terms >> button').click();


        // Click div[role="dialog"] div:has-text("Upload File")
        await page.locator('div[role="dialog"] div:has-text("Upload File")').click();
        // Press Tab
        await page.locator('body:has-text("A Singapore Government Agency WebsiteHomeLogoutHomeDashboardEServicesAP CO (appr")').press('Tab');
        // Press Space
        await page.keyboard.press('Space');


        // Click text=Operational Items e.g. Placemats/Tent Cards/Wobblers
        await page.locator('text=Operational Items e.g. Placemats/Tent Cards/Wobblers').click();

        // Click text=Document TypeOperational Items e.g. Placemats/Tent Cards/WobblersDocument TitleF >> input[type="text"] >> nth=1
        await page.locator('text=Document TypeOperational Items e.g. Placemats/Tent Cards/WobblersDocument TitleF >> input[type="text"]').nth(1).click();

        // Fill text=Document TypeOperational Items e.g. Placemats/Tent Cards/WobblersDocument TitleF >> input[type="text"] >> nth=1
        await page.locator('text=Document TypeOperational Items e.g. Placemats/Tent Cards/WobblersDocument TitleF >> input[type="text"]').nth(1).fill('Second Document');

        // Upload Test.docx
        await page.locator('span:has-text("Choose")').first().locator("input").setInputFiles('Test2.docx');

        // Assert here instead
        await page.waitForSelector('span:has-text("Test2.docx")');

        // Click button:has-text("Confirm")
        await page.locator('button:has-text("Confirm")').click();

        //Take screenshot of attachment page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 18-02-cra-apCoApproval-Attachment.png', fullPage: true })


        // Click button:has-text("Next")
        await page.locator('button:has-text("Next")').click();

        //Take screenshot of preview page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 18-03-cra-apCoApproval-Preview.png', fullPage: true })


        // Click button:has-text("Finish")
        await page.locator('button:has-text("Finish")').click();

        // await page.waitForLoadState();

        await page.waitForSelector('h3:has-text("Submitted Successfully")');

        // Find appNo using the date part
        appNoR01 = await page.$eval('text=' + appNo + '/', el => el.textContent.trim());

        console.log('appNoR01', appNoR01);

        //Take screenshot of submitted page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 18-04-cra-apCoApproval-Submission.png', fullPage: true })

    });

    test('Applicant Logout @applicant @applresubmit', async ({ browserName }) => {

        await logout();

    });

    test('Inspector Login @inspector @inspvalidateresubmit @inspcheckresubmit @inspsendtoapprover', async ({ browserName }) => {

        await login(inspectorEmail);
    });


    test('Inspector Open Task @inspector @inspvalidateresubmit @inspcheckresubmit @inspsendtoapprover', async ({ browserName }) => {

        await openTask('text=AP CO Approval - ' + appNoR01 + 'Inspection');

    });

    test('Inspector Check Task @inspector @inspcheckresubmit', async ({ browserName }) => {
        //Task panel message about resubmission
        await expect(page.locator('text=at Resubmission chose Resubmit').first()).toBeVisible();

        // Expect #wizard-tabview div:has-text("Application number") > .p-inputtext to have value aappNoR01ppNo
        await expect(page.locator('#wizard-tabview div:has-text("Application number") > .p-inputtext')).toHaveValue(appNoR01);

        // Changed Title
        await expect(page.locator('#wizard-tabview div:has-text("AP title") > .p-inputtext')).toHaveValue('A&P Title ' + dateNow + ' amended 1');

        // Yellow background of changed Title
        await expect(page.locator('div.isModified:has-text("AP title")')).toBeVisible();

        // Resubmission list has 1 item with appNo
        await expect(page.locator('text=List of Previous Submissions' + appNo + ' - ' + 'A&P Title ' + dateNow)).toBeVisible();

        // Changed Description
        await expect(page.locator('#wizard-tabview div:has-text("AP details/description:") > .p-inputtextarea')).toHaveValue('More details about AP - also amended');

        // Yellow Background of changed Description
        await expect(page.locator('div.isModified:has-text("AP details/description:")')).toBeVisible();

        // Deleted Document
        await expect(page.locator('a.file-deleted:has-text("Test.docx")')).toBeVisible();

        // Added Document
        await expect(page.locator('text=File Attachment Test2.docx')).toBeVisible();

        // Yellow Background of Added Document
        await expect(page.locator('tr.file-isModified:has-text("Document TypeOperational Items e.g. Placemats/Tent Cards/WobblersDocument TitleSecond DocumentFile Attachment Test2.docx")')).toBeVisible();

        // Count isModified = 3
        await expect(page.locator('div.isModified')).toHaveCount(2);
        await expect(page.locator('tr.file-isModified')).toHaveCount(1);

    });

    test('Inspector Validate Send to Approver @inspector @inspvalidateresubmit @inspcheckresubmit', async ({ browserName }) => {

        // Click button:has-text("Send to Approver")
        await page.locator('button:has-text("Send to Approver")').click();

        // Click text=Validation is not successful to be visible
        await expect(page.locator('text=Validation is not successful')).toBeVisible();

        await expect(page.locator('text=RecommendationRecommendationThis field is required >> small')).toBeVisible();

        await expect(page.locator('text=Select ApproverThis field is required >> small')).toBeVisible();

    });

    test('Inspector Send to Approver @inspector @inspcheckresubmit @inspsendtoapprover', async ({ browserName }) => {

        // Click span:has-text("Recommendation")
        await page.locator('span:has-text("Recommendation")').click();
        // Click [aria-label="Approve"]
        await page.locator('[aria-label="Approve"]').click();

        // Press Tab
        await page.locator('text=RecommendationApprove >> input[type="text"]').press('Tab');
        // Type cra
        await page.keyboard.type('cra');
        // Click text=cra_appr1@outlook.com
        await page.locator('text=cra_appr1@outlook.com').click();

        // Click text=Assessment by InspectorRich Text EditorHeadingParagraphParagraphHeading 1Heading >> [aria-label="Rich\ Text\ Editor\,\ main"]
        await page.locator('text=Assessment by InspectorRich Text EditorHeadingParagraphParagraphHeading 1Heading >> [aria-label="Rich\\ Text\\ Editor\\,\\ main"]').click();
        // Type Application is comprehensive and within guidelines
        await page.keyboard.type('Application is comprehensive and within guidelines');


        // Upload InspAssess.docx
        await page.locator('text=Assessment by InspectorRich Text EditorHeadingParagraphParagraphHeading 1Heading >> input[type="file"] >> nth=1').setInputFiles('InspAssess.docx');
        // Assert here
        await page.waitForSelector('span:has-text("InspAssess.docx")');


        // Click text=Approval conditionsRich Text EditorHeadingParagraphParagraphHeading 1Heading 2He >> [aria-label="Rich\ Text\ Editor\,\ main"]
        await page.locator('text=Approval conditionsRich Text EditorHeadingParagraphParagraphHeading 1Heading 2He >> [aria-label="Rich\\ Text\\ Editor\\,\\ main"]').click();
        await page.keyboard.type('Condition 1');

        // Click text=Internal CommentRich Text EditorHeadingParagraphParagraphHeading 1Heading 2Headi >> [aria-label="Rich\ Text\ Editor\,\ main"]
        await page.locator('text=Internal CommentRich Text EditorHeadingParagraphParagraphHeading 1Heading 2Headi >> [aria-label="Rich\\ Text\\ Editor\\,\\ main"]').click();
        // Type For your approval please
        await page.keyboard.type('For your approval please');
        // Upload InspComment.docx
        await page.locator('text=Internal CommentRich Text EditorHeadingParagraphParagraphHeading 1Heading 2Headi >> input[type="file"] >> nth=1').setInputFiles('InspComment.docx');
        // Assert here
        await page.waitForSelector('span:has-text("InspComment.docx")');

        // Take screenshot of Send to Approver page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 24-01-cra-apCoApproval-InspSendToApprover.png', fullPage: true })

        // Click Send to Approver
        page.locator('button:has-text("Send to Approver")').click()

        console.log('Too fast to see: SuccessSend to Approver');
        // // Expect SuccessSend to Approver
        // await expect(page.locator('SuccessSend to Approver')).toBeVisible();

    });

    test('Inspector Logout @inspector @inspcheckresubmit', async ({ browserName }) => {

        await logout();

    });

    test('Approver Login @approver @appragree', async ({ browserName }) => {

        await login(approverEmail);
    });

    test('Approver Open Task @approver @appragree', async ({ browserName }) => {
        console.log('appNoR01', appNoR01);
        await openTask('text=AP CO Approval - ' + appNoR01 + 'Approval');

    });

    test('Approver Check Task @approver @appragree', async ({ browserName }) => {

        // Task panel message about send to approver
        await expect(page.locator('text=at Inspection chose Send to Approver').first()).toBeVisible();

        // Task panel inspector message
        await expect(page.locator('text=For your approval please').first()).toBeVisible();

        // Task panel document attachment
        await expect(page.locator('text=InspComment.docx').first()).toBeVisible();

        // Click text=Recommendation by InspectorApprove
        await expect(page.locator('text=Recommendation by InspectorApprove')).toBeVisible();
        //await page.locator('text=Recommendation by InspectorApprove').click();

        // Click text=Application is comprehensive and within guidelines
        await expect(page.locator('text=Application is comprehensive and within guidelines')).toBeVisible();
        //await page.locator('text=Application is comprehensive and within guidelines').click();

        // Click text=InspAssess.docx
        await expect(page.locator('text=InspAssess.docx')).toBeVisible();
        //await page.locator('text=InspAssess.docx').click();

        // Click text=Condition 1
        await expect(page.locator('text=Condition 1')).toBeVisible();
        //await page.locator('text=Condition 1').click();
    });

    test('Approver Complete Task @approver @appragree', async ({ browserName }) => {

        // Click text=Internal CommentRich Text EditorHeadingParagraphParagraphHeading 1Heading 2Headi >> [aria-label="Rich\ Text\ Editor\,\ main"]
        await page.locator('text=Internal CommentRich Text EditorHeadingParagraphParagraphHeading 1Heading 2Headi >> [aria-label="Rich\\ Text\\ Editor\\,\\ main"]').click();
        // Type For your approval please
        await page.keyboard.type('I agree with the assessment');
        // Upload InspComment.docx
        await page.locator('text=Internal CommentRich Text EditorHeadingParagraphParagraphHeading 1Heading 2Headi >> input[type="file"] >> nth=1').setInputFiles('ApprComment.docx');
        // Assert here
        await page.waitForSelector('span:has-text("ApprComment.docx")');

        // Take screenshot of Send to Approver page
        await page.screenshot({ path: 'screencaptures/' + dateNow + ' ' + browserName + ' 29-01-cra-apCoApproval-ApproverAgree.png', fullPage: true })

        // Click Agree
        page.locator('button:has-text("Agree")').click()

    });

    test('Approver Logout @approver @appragree', async ({ browserName }) => {
        await logout();
    });

});
