let cuentas = [
    { nombre: "Mali", saldo: 200, contraseña: "1111"},
    { nombre: "Gera", saldo: 290, contraseña: "2222"},
    { nombre: "Maui", saldo: 67, contraseña: "3333"}
  ];

  

  let cuentaSeleccionada = null;

  function verificarUsuario() {
    const nombre = document.getElementById("username").value;
    const contraseña = document.getElementById("password").value;

    cuentaSeleccionada = cuentas.find((cuenta) => cuenta.nombre === nombre && cuenta.contraseña === contraseña);
    console.log(cuentaSeleccionada)

    if (cuentaSeleccionada) {
      document.getElementById("cuentas").style.display = "none";
      document.getElementById("opciones").style.display = "block";
    } else {
      alert("Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
  }


  function consultarSaldo() {
    document.getElementById("opciones").style.display = "none";
    document.getElementById("resultados").style.display = "block";
    document.getElementById("mensaje").textContent = "Saldo actual:";
    document.getElementById("saldo").textContent = "$" + cuentaSeleccionada.saldo;
  }

  function ingresarMonto() {
    let monto = Number(prompt("Ingrese el monto a depositar:"));
    if (!isNaN(monto) && monto > 0) {
        if (cuentaSeleccionada.saldo + monto <= 990) {
            cuentaSeleccionada.saldo += monto;
            mostrarResultado("Monto ingresado: $" + monto, "Nuevo saldo: $" + cuentaSeleccionada.saldo);
             
    Swal.fire({
        icon: 'success',
        title: 'Tu movimiento fue exitoso',
        showConfirmButton: false,
        timer: 1500
        })
          } else {
            Swal.fire({
                icon: 'error',
                title: "No es posible retirar esa cantidad",
                text: 'Intentalo de nuevo',
              })
          }
    } 
  }

  function retirarMonto() {
    let monto = Number(prompt("Ingrese el monto a retirar:"));
    if (!isNaN(monto) && monto > 0) {
      if (cuentaSeleccionada.saldo - monto >= 10 && cuentaSeleccionada.saldo - monto <= 990) {
        cuentaSeleccionada.saldo -= monto;
        mostrarResultado("Monto retirado: $" + monto, "Nuevo saldo: $" + cuentaSeleccionada.saldo);
        Swal.fire({
            icon: 'success',
            title: 'Tu movimiento fue exitoso',
            showConfirmButton: false,
            timer: 1500
            })
      } else {
        Swal.fire({
            icon: 'error',
            title: "No es posible retirar esa cantidad",
            text: 'Intentalo de nuevo',
          })
      }
    } else {
      alert("Monto inválido. Inténtalo de nuevo.");
    }
  }

  function mostrarResultado(mensaje1, mensaje2) {
    document.getElementById("opciones").style.display = "none";
    document.getElementById("resultados").style.display = "block";
    document.getElementById("mensaje").textContent = mensaje1;
    document.getElementById("saldo").textContent = mensaje2;
  }

  function volverAOpciones() {
    document.getElementById("resultados").style.display = "none";
    document.getElementById("opciones").style.display = "block";
  }