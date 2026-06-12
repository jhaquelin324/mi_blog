
    const enlaces = document.querySelectorAll('nav a');
    const secciones = document.querySelectorAll('.seccion');

    const mostrarSeccion = (id) => {
      secciones.forEach(sec => sec.classList.remove('activa'));
      document.getElementById(id).classList.add('activa');
    };

    enlaces.forEach(enlace => {
      enlace.addEventListener('click', e => {
        e.preventDefault();
        const id = enlace.dataset.seccion;
        mostrarSeccion(id);
      });
    });

    class Producto {
      constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
      }

      render() {
        const div = document.createElement('div');
        div.innerHTML = `
          <img src="${this.imagen}" alt="${this.nombre}" title="${this.nombre}" style="width:150px; border-radius:10px;">
          <p>${this.nombre}</p>
        `;
        return div;
      }
    }

    const galeria = document.getElementById('galeria');
    const botonAgregar = document.getElementById('agregarProducto');

    botonAgregar.addEventListener('click', () => {
      const nuevo = new Producto("Masmelo de fresa", "images/masmelo1.jpg");
      galeria.appendChild(nuevo.render());
    });
    
 