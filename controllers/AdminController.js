class AdminController {

    adminView (req,res) {
        res.render('admin/admin')
    }

    cadastrarProdutoView(req,res ) {
        res.render('admin/cadastrar_produto/cadastrar_produto')
    }

    produtosCadastradosView(req,res ) {
        res.render('admin/produtos_cadastrados/produtos_cadastrados')
    }

    cadastrarCategoriaView (req,res) {
        res.render('admin/cadastrar_produto/cadastrar_categoria')
    }

}

module.exports = AdminController;