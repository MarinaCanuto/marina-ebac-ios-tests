import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'

describe('Account - iOS', () => {

    it('deve abrir a tela de login', async () => {
        const profileTab = driver.isAndroid ? 'profile' : 'Account'

        await homePage.openMenu(profileTab)

        const email = await loginPage.email
        await expect(email).toBeDisplayed()
    })

    it('deve preencher os dados de login', async () => {
        const profileTab = driver.isAndroid ? 'profile' : 'Account'

        await homePage.openMenu(profileTab)

        await loginPage.login(
            'cliente@ebac.art.br',
            'GD*peToHNJ1#c$sgk08EaYJQ'
        )
    })

})