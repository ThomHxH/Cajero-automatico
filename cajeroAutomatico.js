var cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
  ];
  
  var cuentaSeleccionada;
  var saldoInicial;
  
  document.getElementById("iniciarSesion").addEventListener("click", iniciarSesion);
  document.getElementById("consultarSaldo").addEventListener("click", consultarSaldo);
  document.getElementById("ingresarMonto").addEventListener("click", ingresarMonto);
  document.getElementById("retirarMonto").addEventListener("click", retirarMonto);
  
  function iniciarSesion() {
    var seleccion = document.getElementById("cuenta");
    var password = document.getElementById("password").value;
    cuentaSeleccionada = seleccion.value;
  
    if (cuentaSeleccionada >= 0 && cuentaSeleccionada < cuentas.length) {
      if (password === "contraseña") {
        saldoInicial = cuentas[cuentaSeleccionada].saldo;
        document.getElementById("operaciones").style.display = "block";
        document.getElementById("resultado").style.display = "none";
        document.getElementById("password").value = "";
      } else {
        mostrarResultado("Contraseña incorrecta. Intenta nuevamente.");
      }
    } else {
      mostrarResultado("Cuenta no válida. Selecciona una cuenta válida.");
    }
  }
  
  function consultarSaldo() {
    mostrarResultado("Saldo actual: $" + saldoInicial);
  }
  
  function ingresarMonto() {
    var montoIngresado = prompt("Ingresa el monto a ingresar:");
    montoIngresado = parseFloat(montoIngresado);
  
    if (isNaN(montoIngresado) || montoIngresado <= 0) {
      mostrarResultado("Monto inválido. Ingresa un monto válido.");
    } else {
      var nuevoSaldo = saldoInicial + montoIngresado;
      if (nuevoSaldo <= 990) {
        cuentas[cuentaSeleccionada].saldo = nuevoSaldo;
        mostrarResultado("Monto ingresado: $" + montoIngresado + "<br> Nuevo saldo: $" + nuevoSaldo);
        saldoInicial = nuevoSaldo;
      } else {
        mostrarResultado("No puedes tener más de $990 en tu cuenta.");
      }
    }
  }
  
  function retirarMonto() {
    var montoRetirar = prompt("Ingresa el monto a retirar:");
    montoRetirar = parseFloat(montoRetirar);
  
    if (isNaN(montoRetirar) || montoRetirar <= 0) {
      mostrarResultado("Monto inválido. Ingresa un monto válido.");
    } else {
      var nuevoSaldo = saldoInicial - montoRetirar;
      if (nuevoSaldo >= 10) {
        cuentas[cuentaSeleccionada].saldo = nuevoSaldo;
        mostrarResultado("Monto retirado: $" + montoRetirar + "<br> Nuevo saldo: $" + nuevoSaldo);
        saldoInicial = nuevoSaldo;
      } else {
        mostrarResultado("No puedes tener menos de $10 en tu cuenta.");
      }
    }
  }
  
  function mostrarResultado(mensaje) {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = mensaje;
    resultado.style.display = "block";
  }