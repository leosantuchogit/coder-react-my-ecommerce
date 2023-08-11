const Loader = () => {
    
    return (
       
        <div class="d-flex flex-column align-items-center justify-content-center" style={{height:"500px"}}>
            <div class="row">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <div class="row">
                <h5 className="fw-light p-3">Cargando productos...</h5>
            </div>
        </div>
     
    )
}

export default Loader