package com.example.ecommerce.controller;

import org.springframework.security.core.Authentication;   // ✅ correct import
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ecommerce.dto.CartDTO;
import com.example.ecommerce.entity.Cart;
import com.example.ecommerce.service.CartService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    //http://localhost:8080/api/cart/add
//    {
//    	  "productId": 1,
//    	  "quantity": 1
//    	}
    @PostMapping("/add")
    public Cart addToCart(@RequestBody CartDTO dto,
                          Authentication authentication) {

        String email = authentication.getName();  // ✅ correct

        return cartService.addToCart(
                email,
                dto.getProductId(),
                dto.getQuantity()
        );
    }
    
    //http://localhost:8080/api/cartgetall
    @GetMapping("/getall")
    public Cart viewCart(Authentication authentication) {

        String email = authentication.getName();  // ✅ correct

        return cartService.viewCart(email);
    }
    //http://localhost:8080/api/cart/remove/1
    @DeleteMapping("/remove/{productId}")
    public Cart removeFromCart(@PathVariable Long productId,
                               Authentication authentication) {

        String email = authentication.getName();

        return cartService.removeFromCart(email, productId);
    }
}