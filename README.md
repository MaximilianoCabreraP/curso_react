# Proyecto integrador Curso de React JS

<h3>https://curso-react-coderhouse.web.app/</h3>

El proyecto es un ecommerce que se encuentra finalizado.
En la parte superior tenemos la barra de navegación (NavBar) donde se encuentran las categorías.
En la parte central de la página se pueden ver un listado de productos de varias categorías.
Tanto las categorías como los productos se obtienen de forma dinámica consultando a la base de datos.
Por el lado de las categorías, se utiliza esa información para crear el menú desplegable de las mismas.
En cuanto a los productos, se listan los productos que se encuentran en nuestra base de datos.

Al hacer click en alguna de estas categorías se muestra una lista filtrada de los productos que corresponden a ella. Para esto se utilizó NavLinks para el Routing.

Al seleccionar un item de alguno de los listados, se nos mostrará el detalle del mismo, donde se podrá seleccionar, dependiendo del stock disponible, la cantidad de unidades que se desea comprar. Se pueden agregar tantos items como se desee, siempre y cuando haya disponibilidad.

Una vez finalizada la selección de productos se procede a finalizar la compra, en esta nueva pantalla podemos ver un resumen de nuestro carrito en donde tenemos la posibilidad de agregar o quitar productos. 

En todo momento podemos visualizar del lado derecho el gasto final de la compra. Ahí mismo se deben completar los datos de la compra.

Finalmente se nos muestra la pantalla de "Mis Pedidos" donde podemos ver los pedidos realizados teniendo los pedidos más recientes en la parte superior (con el último pedido resaltado) y los pedidos anteriores por debajo.

Además de esto, contamos con un sistema de registro de usuarios. Una vez completados los datos se nos permitirá loguearnos.
Esto nos permite guardar productos en nuestra Wishlist, y al momento de finalizar la compra nos ahorra tiempo de completado de información.

## Videos
<ul>
    <li>Uso de la página: https://drive.google.com/file/d/1CwebVLu08-EkAvvQQmgGTIsdPzJ7jtmZ/preview</li>
    <li>Registro y Login: https://drive.google.com/file/d/1CSfnvgAluRCpCshBU7XF6Mt_742nldvH/preview</li>
    <li>Manejo de Errores: https://drive.google.com/file/d/1-Uz-eL4nV4y6oxKEpyOhM27Z9pCs1Wak/preview</li>
</ul>

## Hooks, Herramientas y Librerías utilizadas
<ul>
    <li>useState</li>
    <li>useEffect</li>
    <li>useParams</li>
    <li>useHistory</li>
    <li>useContext</li>
</ul>
<ul>
    <li>BrowserRouter</li>
    <li>Switch</li>
    <li>Route</li>
</ul>
<ul>
    <li>Bootstrap 4</li>
    <li>bootstrap-icons</li>
    <li>react-bootstrap</li>
    <li>Bootswatch</li>
    <li>React-router-dom</li>
    <li>firebase</li>
</ul>