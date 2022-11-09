const header_recomendation = (block) => {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Ninth navbar example">
        <div class="container-fluid">
        <a type="button" class="btn btn_head_clr" href="collection.html">${block.value[0]}</a>
        <a type="button" class="btn btn_head_clr" id="info">${block.value[1]}</a>
        </div>
    </nav>
    `;
};

const header_collection = (block) => {
  return `
    <nav class="navbar bg-dark"">
        <div class="container-fluid">
            <a
            type="button"
            class="btn btn_head_clr"
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
            <button class="btn btn_head_clr" type="submit">${block.value[2]}</button>
            </form>
        </div>
    </nav>
    `;
};
//#ebebeb

const carusel = (block) => {
  return `    
    <section class="container-centre py-5 text-center">   
        <section id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img height=${block.img.height}, width=${block.img.width} src=${block.img.path} alt="Изображение1"/>
                </div>
                <div class="carousel-item">
                    <img height=${block.img.height}, width=${block.img.width} src=${block.img.path} alt="Изображение2"/>
                </div>
                <div class="carousel-item">
                    <img height=${block.img.height}, width=${block.img.width} src=${block.img.path} alt="Изображение3"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" script="../swipe.js">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Предыдущий</font></font></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" script="../swipe.js">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Следующий</font></font></span>
            </button>
        </section>
    </section>
    `;
};

const card = (block) => {
  return `
    <section class="py-5 text-center container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
                <div class="card shadow-sm">
                    <svg
                    class="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Заполнитель: Миниатюра"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    </svg>

                    <div class="card-body">
                        <p class="card-text">
                            <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                                >Это более широкая карточка со вспомогательным текстом
                                ниже, который является естественным переходом к
                                дополнительному контенту. </font
                            ><font style="vertical-align: inherit"
                                >Этот контент немного длиннее.</font
                            ></font
                            >
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button
                                type="button"
                                class="btn btn-sm btn-outline-secondary"
                            >
                                <font style="vertical-align: inherit"
                                ><font style="vertical-align: inherit">${block.value[0]}</font></font
                                >
                            </button>
                            <button
                                type="button"
                                class="btn btn-sm btn-outline-secondary"
                            >
                                <font style="vertical-align: inherit"
                                ><font style="vertical-align: inherit"
                                    >${block.value[1]}</font
                                ></font
                                >
                            </button>
                            </div>
                            <small class="text-muted"
                            ><font style="vertical-align: inherit"
                                ><font style="vertical-align: inherit"
                                >${block.value[2]}</font
                                ></font
                            ></small
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
};

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
  carusel,
  card,
  footer,
};
