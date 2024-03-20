describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    })


    it('',()=>{
        cy.get(':nth-child(3) > .btn').click();
        cy.get('[ng-class="btnClass1"]').click();
        cy.get(':nth-child(1) > .form-control').type('ali')
        cy.get(':nth-child(2) > .form-control').type('berdaiji')
        cy.get(':nth-child(3) > .form-control').type('70000')
        cy.get('form.ng-dirty > .btn',{timeout:10000}).click();
        cy.get('[ng-class="btnClass3"]').click();
        cy.get(`tbody > tr:last > :nth-child(1)`).contains('ali');
        cy.get(`tbody > tr:last > :nth-child(2)`).contains('berdaiji');      
        cy.get(`tbody > tr:last > :nth-child(3)`).contains('70000');  
       
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('#userSelect').select('ali berdaiji');
        cy.get('#currency').select('Dollar');
        cy.get('form.ng-dirty > button').click();
        cy.get('[ng-class="btnClass3"]').click();
        cy.get(`tbody > tr:last > :nth-child(1)`).contains('ali');
        cy.get(`tbody > tr:last > :nth-child(2)`).contains('berdaiji');      
        cy.get(`tbody > tr:last > :nth-child(3)`).contains('70000');  
        cy.get('tbody > tr:last > :nth-child(4)').should('not.be.null');

        
        // search
        cy.get('.form-control').type("ali");
        cy.get(`tbody > tr:first > :nth-child(1)`).contains('ali');
        cy.get(`tbody > tr:first > :nth-child(2)`).contains('berdaiji');      
        cy.get(`tbody > tr:first > :nth-child(3)`).contains('70000');  
        cy.get('tbody > tr:first > :nth-child(4)').should('not.be.null');
        cy.get('.home').click();
        cy.get('.borderM > :nth-child(1) > .btn').click();
        cy.get('#userSelect').select('ali berdaiji');
        cy.get('form.ng-valid > .btn').click();
        // deposit
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('.form-control').type(20000);
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.borderM > :nth-child(3) > :nth-child(2)').contains(20000);
        // Reset
        cy.get('[ng-class="btnClass1"]').click();
        cy.get('[style="float:right;margin-top:-30px;"]').click();
        cy.get('#anchor0 > :nth-child(1)').should('not.exist');
        //logout
        cy.get('.logout').click();
         //delete 
         cy.get('.home').click();
         cy.get(':nth-child(3) > .btn').click();
         cy.get('[ng-class="btnClass3"]').click();
        cy.get('tr:last > :nth-child(5) > button').click();
        cy.get(`tbody > tr:last > :nth-child(1)`).should('not.contain','ali');
        cy.get(`tbody > tr:last > :nth-child(2)`).should('not.contain','berdaiji');     
        cy.get(`tbody > tr:last > :nth-child(3)`).should('not.contain','70000');
         
    });

  })