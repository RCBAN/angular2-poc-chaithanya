System.register(['angular2/core', 'angular2/router', './product-filter.pipe', '../shared/star.component', './product.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, product_filter_pipe_1, star_component_1, product_service_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_filter_pipe_1_1) {
                product_filter_pipe_1 = product_filter_pipe_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            ProductListComponent = (function () {
                function ProductListComponent(_productService, _router) {
                    this._productService = _productService;
                    this._router = _router;
                    this.pageTitle = 'Product List';
                    this.greyColor = 'grey';
                    this.purpleColor = 'purple';
                    this.bColor = '';
                    this.imageWidth = 86;
                    this.imageMargin = 2;
                    this.showImage = true;
                    this.listFilterString = '';
                    this.homeUrl = 'http://localhost:3000';
                    // its best practice to keep constructor free of logic and use component lifecycle hook method like ngOnInit which comes with the OnInit interface
                }
                ProductListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._productService.getProducts().subscribe(// In the component, subscribe to the observable and handle success and failure cases
                    function (// In the component, subscribe to the observable and handle success and failure cases
                        products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
                };
                ProductListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                ProductListComponent.prototype.onRatingClicked = function (messageRcvd) {
                    this.pageTitle = 'Product List' + messageRcvd;
                    console.log('Product List message clicked..');
                };
                ProductListComponent.prototype.goHome = function () {
                    console.log('Home button clicked..');
                    this._router.navigate(['WelcomeComponent']);
                };
                ProductListComponent = __decorate([
                    core_1.Component({
                        //selector: 'pm-products'
                        templateUrl: 'app/products/product-list.component.html',
                        styleUrls: ['app/products/product-list.component.css'] // comma separated css files could be given
                        ,
                        pipes: [product_filter_pipe_1.ProductFilterPipe],
                        directives: [star_component_1.StarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router])
                ], ProductListComponent);
                return ProductListComponent;
            }());
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map