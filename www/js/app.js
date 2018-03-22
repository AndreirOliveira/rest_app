// Dom7
var $$ = Dom7;
$$('.logoff').hide();
$$('.login-screen-open').show();

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'br.com.phonegap.f7bikcraft', // App bundle ID
  name: 'Bikcraft', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },

});

// Init/Create left panel view
var mainView = app.views.create('.view-left', {
  url: '/'
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .SignUp').on('click', function () {
  var username = $$('#my-login-screen [name="emailInput"]').val();
  var password = $$('#my-login-screen [name="passwordInput"]').val();

  firebase
    .auth()
    .createUserWithEmailAndPassword(username,password)//Promisses
    .then( function () {
      app.dialog.alert('Bem vindo: ' + username);
      this.$$('.toolbar-inner').text = 'Bem Vindo: ' + username;
    })
    .catch(function(error){
      console.error(error.code)
      console.error(error.message)
      if (error.code =='auth/ivalid-email'){
        app.dialog.alert('Email invalido no seu formato!!!');
      }$$('#btnSalvar').on('click', function () {
        var formData = app.form.convertToData('#form-user-content')
        var nameInput = $$('#name [name="name"]').val();
        var nameInput = $$('#password [name="password"]').val();
        alert(JSON.stringify(formData))
        firebase.database().ref().child('usuarios').push(JSON.stringify(formData))
    });
  app.loginScreen.close('#my-login-screen');
  })
  0
  app.loginScreen.close('#my-login-screen');
});


$$('#my-login-screen .SignIn').on('click', function () {
  var username = $$('#my-login-screen [name="emailInput"]').val();
  var password = $$('#my-login-screen [name="passwordInput"]').val();
  firebase
    .auth()
    .signInWithEmailAndPassword(username,password) //Promisses
    .then( function () {
        app.dialog.alert('Bem vindo: ' + username);
        this.$$('.toolbar-inner').text('Bem vindo: ' + username + ' vc está logado!');          
        $$('.logoff').show();
        $$('.login-screen-open').hide();
        $$('input#emailInput').val('');
        $$('input#passwordInput').val('');        
    })
    .catch( function(error){
      console.error(error.code)
      console.error(error.message)
      if (error.code =='auth/invalid-email'){
        app.dialog.alert('E-mail inválido no seu formato!!!');
      }
      app.dialog.alert('Falha ao cadastrar, verifique o erro no console');
    })
  // Close login screen
  app.loginScreen.close('#my-login-screen');
});

$$('#my-login-screen .SignOut').on('click', function () {
  app.loginScreen.close('#my-login-screen');
  $$('input#emailInput').val('');
  $$('input#passwordInput').val('');
  firebase
    .auth()
    .signOut()
    .then( function () {
      this.$$('.toolbar-inner').text('Usuário não autenticado');
      app.dialog.alert('Usuário não autenticado');
      app.loginScreen.close('#my-login-screen');
      $$('.logoff').hide();
      $$('.login-screen-open').show();      
    }, function(error){
      console.error(error)
    })
});
$$('#my-login-screen .login-screen-close').on('click', function () {
  $$('input#emailInput').val('');
  $$('input#passwordInput').val('');
})
$$('.logoff').on('click', function () {
  firebase
    .auth()
    .signOut()
    .then( function () {
      this.$$('.toolbar-inner').text('Usuário não autenticado');
      app.dialog.alert('Usuário não autenticado');
      $$('input#emailInput').val('');
      $$('input#passwordInput').val('');
      $$('.logoff').hide();
      $$('.login-screen-open').show();
    }, function(error){
      console.error(error)
    })  
})

