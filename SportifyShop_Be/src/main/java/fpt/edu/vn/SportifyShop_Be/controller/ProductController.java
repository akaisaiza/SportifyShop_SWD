package fpt.edu.vn.SportifyShop_Be.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fpt.edu.vn.SportifyShop_Be.model.Product;
import fpt.edu.vn.SportifyShop_Be.repository.ProductRepository;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // API để lấy danh sách sản phẩm
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // API để lấy một sản phẩm theo ID
    @GetMapping("/{id}")
public ResponseEntity<Product> getProductById(@PathVariable int id) { // Sử dụng int thay vì Long
    Optional<Product> product = productRepository.findById(id);
    return product.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
}

    // API để tạo một sản phẩm mới
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    // API để cập nhật thông tin sản phẩm
    @PutMapping("/{id}")
public ResponseEntity<Product> updateProduct(@PathVariable int id, @RequestBody Product updatedProduct) { // Sử dụng int thay vì Long
    if (!productRepository.existsById(id)) {
        return ResponseEntity.notFound().build();
    }
    updatedProduct.setProductID(id);
    return ResponseEntity.ok(productRepository.save(updatedProduct));
}

    // API để xóa một sản phẩm
    @DeleteMapping("/{id}")
public ResponseEntity<Void> deleteProduct(@PathVariable int id) { 
    if (!productRepository.existsById(id)) {
        return ResponseEntity.notFound().build();
    }
    productRepository.deleteById(id);
    return ResponseEntity.noContent().build();
}
}
