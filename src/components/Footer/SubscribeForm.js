const SubscribeForm = () => {
    return (
      
            <div class="col-md-5 offset-md-1 mb-3">
                <form>
                    <h5>Suscribte a nuestro newsletter</h5>
                    <p>Resumen mensual de todo lo nuevo y emocionante.</p>
                    <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                        <label for="newsletter1" class="visually-hidden">Email</label>
                        <input id="newsletter1" type="text" class="form-control" placeholder="Dirección de email" />
                        <button class="btn btn-primary" type="button">Suscribite</button>
                    </div>
                </form>
            </div>
    
    )
}

export default SubscribeForm;