package fpt.edu.vn.SportifyShop_Be.controller;

import fpt.edu.vn.SportifyShop_Be.model.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
// Do minh lam API nên mình sẽ tạo các api trả về dữ liệu dưới dạng json có 2 cách :
//Cách 1 :
//sử dụng ResponseEntity với HttpStatus
//cách 2 : phần cmt sử dụng @ResponseBody
//@Controller
@RestController
public class demoController {
    @GetMapping("/api/data1")
    public ResponseEntity<Product> getMyData() {
        Product data = new Product("Iphone 11","new model",123.45,1);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }
//    @GetMapping("/api/data2")
//    @ResponseBody
//    public Product getProduct() {
//        Product data = new Product("Iphone 13","new model",22.5,1);
//        return data;
//    }

}
