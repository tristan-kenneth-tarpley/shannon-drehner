const Header = class {
    constructor(title, keywords, description){
        this.title = title
        this.keywords = keywords
        this.description = description
    }
    build(){
        const header_scripts = `
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i%7CFrank+Ruhl+Libre:300,400,500,700,900" rel="stylesheet">
        <title>${this.title}</title>
        <meta charset="utf-8">
        <meta name="author" content="Shannon Drehner, Attorney at Law">
        <meta name="keywords" content="${this.keywords}">
        <meta name="description" content="${this.description}">

        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

        <link rel="stylesheet" href="font/demo-files/demo.css">
        <link rel="stylesheet" href="plugins/fancybox/jquery.fancybox.css">
        <link rel="stylesheet" href="plugins/revolution/css/settings.css">
        <link rel="stylesheet" href="plugins/revolution/css/layers.css">
        <link rel="stylesheet" href="plugins/revolution/css/navigation.css">

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/fontello.css">
        <link rel="stylesheet" href="css/owl.carousel.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/responsive.css">`
        return header_scripts
    }
}

