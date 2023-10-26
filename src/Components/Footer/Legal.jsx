export function Legal (){
    return(
        <>
        <footer className="bg-black text-light py-5">
          <div className="container d-flex">
            <div className="w-100">
              <a className="h4 text-decoration-none" href="#">Infinity Rentals</a>
              <div className="d-flex gap-3 mt-5">
                <ul>
                  <li>About Us</li>
                  <li>General Conditions</li>
                  <li>Cookies Policy</li>
                  <li>Privacy Policy</li>

                </ul>
               
            </div>
            </div>
            <div className="w-100">
              <h4>Suscribete a nuestro BLOG</h4>
              <p>L@s mejores consejos y oportunidades</p>
              <div className="input-group mb-3">
                <input type="text" className="htmlForm-control" placeholder="Escribe aqui tu correo" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-primary" type="button" id="button-addon2">Suscribirse</button>
                
              </div>
              <div className="htmlForm-check">
                <input className="htmlForm-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="htmlForm-check-label" htmlFor="flexCheckDefault">
                  Acepto las politicas de privacidad
                </label>
              </div>
              <div className="htmlForm-check">
                <input className="htmlForm-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                <label className="htmlForm-check-label" htmlFor="flexCheckDefault">
                  Quiero recibir todas las novedades
                </label>
              </div>
              <div className="d-flex gap-3">
                <p>Siguenos en redes</p>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>


              </div>
              
            </div>

          </div>    
      </footer>
        
        
        
        
        
        </>
    )
}