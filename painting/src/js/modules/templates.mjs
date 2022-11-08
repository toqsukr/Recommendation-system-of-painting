const header_recomendation = (block) => {
  return `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Ninth navbar example">
                <div class="container-fluid">
                <a type="button" class="btn btn-primary" href="collection.html">${block.value[0]}</a>
                <a type="button" class="btn btn-primary">${block.value[1]}</a>
                </div>
            </nav>
            `;
};

const header_collection = (block) => {
  return `
        <nav class="navbar bg-dark">
        <div class="container-fluid">
            <a
            type="button"
            class="btn btn-primary"
            href="client.html"
            target="_self"
            >${block.value[0]}</a
            >

            <form class="d-flex" role="search">
            <input
                class="form-control me-2"
                type="search"
                placeholder="${block.value[1]}"
                aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">${block.value[2]}</button>
            </form>
        </div>
        </nav>
        `;
};
//#ebebeb

const footer = (block) => {
  return `
              <section class="py-5 text-center container">
                <footer class="pt-4 pt-md-5 border-top", style="background-color: #00000;">
                    <div class="row">
                    <div class="col-12 col-md">
                        <img class="mb-2" src="./favicon-32x32.png" alt="Logo" width="24" height="19">
                        <small class="d-block mb-3 text-muted">${block.value[0]}</small>
                    </div>
                    <div class="col-6 col-md">
                        <h5>${block.value[1]}</h5>
            
                    </div>
                    <div class="col-6 col-md">
                        <h5>${block.value[2]}</h5>
            
                    </div>
                    <div class="col-6 col-md">
                        <h5>${block.value[3]}</h5>
            
                    </div>
                    </div>
                </footer>
              </section>
              `;
};

export const templates = {
  header_recomendation,
  header_collection,
  footer,
};
