package com.example.ecommerce.service;

import com.example.ecommerce.entity.Cart;
import com.example.ecommerce.entity.CartItem;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.repository.CartRepository;
import com.example.ecommerce.repository.ProductRepository;
import com.example.ecommerce.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Iterator;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    // Add to Cart
    public Cart addToCart(String email, Long productId, int quantity) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Cart cart = cartRepository.findByUser(user)
                .orElseGet(() -> {
                    Cart newCart = new Cart();
                    newCart.setUser(user);
                    newCart.setItems(new java.util.ArrayList<>());
                    return newCart;
                });

        CartItem item = new CartItem();
        item.setCart(cart);
        item.setProduct(productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found")));
        item.setQuantity(quantity);

        cart.getItems().add(item);

        return cartRepository.save(cart); // ✅ Persist changes
    }

    // View Cart
    public Cart viewCart(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        return cartRepository.findByUser(user)
                .orElseGet(() -> {
                    Cart cart = new Cart();
                    cart.setUser(user);
                    cart.setItems(new java.util.ArrayList<>());
                    return cart;
                });
    }

    // Remove from Cart
    public Cart removeFromCart(String email, Long productId) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Cart cart = cartRepository.findByUser(user)
                .orElseThrow(() -> new ResourceNotFoundException("Cart not found"));

        // ✅ Remove item from cart list
        Iterator<CartItem> iterator = cart.getItems().iterator();
        boolean removed = false;
        while (iterator.hasNext()) {
            CartItem item = iterator.next();
            if (item.getProduct().getId().equals(productId)) {
                iterator.remove();
                removed = true;
            }
        }

        if (!removed) {
            throw new ResourceNotFoundException("Product not found in cart with id: " + productId);
        }

        // ✅ Save updated cart
        return cartRepository.save(cart);
    }
}