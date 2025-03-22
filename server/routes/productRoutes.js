// productRoutes.js
router.get("/products/:vip_id", productController.getProductsByVip);
router.post("/products", productController.createProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);


