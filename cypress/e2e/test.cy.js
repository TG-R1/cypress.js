describe('[Тестирование] Aвторизации', function () {


    // POSITIVE KEYS AUTORIZATION
    // INPUT email/password
    it('[Авторизация] валидные данные', function () {

        cy.visit('{{ URL }}');
        cy.get("{{ Элелемент }}").type("{{значение}}");
        cy.get("{{ Элелемент }}").type("{{значение}}");
        cy.get("{{ Элелемент }}").click();
        cy.get("{{ Элелемент }}").contains("{{ Текст }}").should("be.visible");
        cy.wait(2000);
        cy.get("{{ Элелемент }}").click();
        cy.get("{{ Элелемент }}").contains("{{ Текст }}").should("be.visible");
        cy.clearCookies();

        })


    // NEGATIVE KEYS AUTORIZATION
    // INVALID EMAIL
    // INVALID EMAIL other
    it("[Авторизация] Нeправильный e-mail", function(){
        // Невалидный e-mail
        cy.visit("{{ Элелемент }}");
        cy.get("{{ Элелемент }}").should("be.empty").type("{{ Элелемент }}");
        cy.get("{{ Элелемент }}").type("{{ Элелемент }}");
        cy.get("{{ Элелемент }}").click();
        cy.get("{{ Элелемент }}").contains("{{ Элелемент }}");
        cy.wait(2000);
        cy.get("{{ Элелемент }}").click();
        cy.clearCookies() //Чистим    куки
        cy.get("{{ Элелемент }}").contains("{{ Элелемент }}").should("be.visible");
    })

    // INVALID EMAIL no @
    it("[Авторизация] E-mail без @", function(){
        // Невалидный e-mail без @
        cy.visit("{{ Элелемент }}")
        cy.get("{{ Элелемент }}").should("be.empty").type("{{ Элелемент }}");
        cy.get("{{ Элелемент }}").type("{{ Элелемент }}");
        cy.get("{{ Элелемент }}").click();
        cy.get("{{ Элелемент }}").contains("{{ Элелемент }}");
        cy.wait(2000);
        cy.get("{{ Элелемент }}").click();
        cy.clearCookies() //Чистим    куки
        cy.get("{{ Элелемент }}").contains("{{ Элелемент }}").should("be.visible");
    })
    
    // INVALID EMAIL only number
    it("[Авторизация] E-mail цифры", function(){
        
        cy.visit("{{ Элелемент }}");
        cy.get("{{ Элелемент }}").should("be.empty").type("111111111111111111");
        cy.get("{{ Элелемент }}").type("{{ Элелемент }}");
        cy.get("{{ Элелемент }}").click();
        cy.get("{{ Элелемент }}").contains("Нужно исправить проблему валидации");
        cy.wait(2000);
        cy.get("#exitMessageButton > .exitIcon").click();
        cy.clearCookies() //Чистим    куки
        cy.get("#form > .header").contains("Форма логина").should("be.visible");
    })

     // INVALID EMAIL special symbols
     it("[Авторизация] E-mail спец. символы", function(){
        
        cy.visit("{{ Элелемент }}");
        cy.get("{{ Элелемент }}").should("be.empty").type("!@#$%^&*()");
        cy.get("#pass").type("iLoveqastudio1");
        cy.get("#loginButton").click();
        cy.get("#messageHeader").contains("Нужно исправить проблему валидации");
        cy.wait(2000);
        cy.get("#exitMessageButton > .exitIcon").click();
        cy.clearCookies() //Чистим    куки
        cy.get("#form > .header").contains("Форма логина").should("be.visible");
    })

    // INVALID EMAIL Up and low register
    it("[Авторизация] E-mail разный регистр ", function(){
        
        cy.visit("{{ Элелемент }}");
        cy.get("{{ Элелемент }}").should("be.empty").type("{{ Элелемент }}");
        cy.get("{{ Элелемент }}").type("{{ Элелемент }}");
        cy.get("{{ Элелемент }}").click();
        cy.get("{{ Элелемент }}").contains("{{ Элелемент }}");
        cy.wait(2000);
        cy.get("{{ Элелемент }}").click();
        cy.clearCookies() //Чистим    куки
        cy.get("{{ Элелемент }}").contains("{{ Элелемент }}").should("be.visible");
    })


    // INVALID PASSWORD
    // INVALID PASS
    it("[Авторизация] Неправильный пароль", function(){
        
        cy.visit("https://login.qa.studio/");
        cy.get("#mail").should("be.empty").type("german@dolnikov.ru");
        cy.get("#pass").type("1234567890");
        cy.get("#loginButton").click();
        cy.get("#messageHeader").contains("Такого логина или пароля нет");
        cy.wait(2000);
        cy.get("#exitMessageButton > .exitIcon").click();
        cy.clearCookies() //Чистим    куки
        cy.get("#form > .header").contains("Форма логина").should("be.visible");

        })

    // INVALID PASS long and space
    it("[Авторизация] Длинный пароль с пробелами", function(){
        
        cy.visit("https://login.qa.studio/");
        cy.get("#mail").should("be.empty").type("german@dolnikov.ru");
        cy.get("#pass").type("111111111111111 11111111111111 0000000000000");
        cy.get("#loginButton").click();
        cy.get("#messageHeader").contains("Такого логина или пароля нет");
        cy.wait(2000);
        cy.get("#exitMessageButton > .exitIcon").click();
        cy.clearCookies() //Чистим    куки
        cy.get("#form > .header").contains("Форма логина").should("be.visible");

        })
    // INVALID PASS special symbols
    it("[Авторизация] Пароль спец. символы", function(){
        // Невалидный пароль
        cy.visit("https://login.qa.studio/");
        cy.get("#mail").should("be.empty").type("german@dolnikov.ru");
        cy.get("#pass").type("!@#$%^&*()");
        cy.get("#loginButton").click();
        cy.get("#messageHeader").contains("Такого логина или пароля нет");
        cy.wait(2000);
        cy.get("#exitMessageButton > .exitIcon").click();
        cy.clearCookies() //Чистим    куки
        cy.get("#form > .header").contains("Форма логина").should("be.visible");

        })


    // FORGOT PASSWORD
    it("[Авторизация] Забыли пароль", function(){
        cy.visit("https://login.qa.studio/");
        cy.get("#forgotEmailButton").click();
        cy.get("#forgotForm > .header").contains("Восстановите пароль");
        cy.get('#mailForgot').should('be.empty').type('good@gmail.com');
        cy.get("#restoreEmailButton").click();
        cy.get('#messageHeader').contains("Успешно отправили пароль на e-mail");
        cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
        cy.clearCookies()
    })

    
 })