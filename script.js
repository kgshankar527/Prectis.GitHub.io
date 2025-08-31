// ---------------- Products Data ----------------
const products = [
  {id:1,name:"Smartphone",category:"Electronics",price:19999,img:"https://via.placeholder.com/250x200"},
    {id:2,name:"Headphones",category:"Electronics",price:2499,img:"https://via.placeholder.com/250x200"},
      {id:3,name:"T-Shirt",category:"Fashion",price:499,img:"https://via.placeholder.com/250x200"},
        {id:4,name:"Jeans",category:"Fashion",price:999,img:"https://via.placeholder.com/250x200"},
          {id:5,name:"Sofa",category:"Furniture",price:15999,img:"https://via.placeholder.com/250x200"},
            {id:6,name:"Chair",category:"Furniture",price:2999,img:"https://via.placeholder.com/250x200"},
              {id:7,name:"Apple",category:"Grocery",price:150,img:"https://via.placeholder.com/250x200"},
                {id:8,name:"Milk",category:"Grocery",price:60,img:"https://via.placeholder.com/250x200"},
                ];

                // ---------------- Cart ----------------
                let cart = [];

                const cartCount = document.getElementById('cartCount');
                const cartModal = document.querySelector('.cart-modal');
                const cartBox = document.querySelector('.cart-box');

                // Update cart icon count
                function updateCartCount() {
                    cartCount.textContent = cart.reduce((acc,i)=>acc+i.qty,0);
                    }

                    // Open cart modal
                    function openCart(){
                        cartModal.style.display = 'flex';
                            renderCart();
                            }

                            // Add product to cart
                            function addToCart(id){
                                const product = products.find(p=>p.id===id);
                                    const existing = cart.find(item=>item.id===id);
                                        if(existing){
                                                existing.qty +=1;
                                                    } else {
                                                            cart.push({...product, qty:1});
                                                                }
                                                                    updateCartCount();
                                                                        renderCart();
                                                                            openCart();
                                                                            }

                                                                            // Remove product from cart
                                                                            function removeFromCart(id){
                                                                                cart = cart.filter(item=>item.id!==id);
                                                                                    updateCartCount();
                                                                                        renderCart();
                                                                                        }

                                                                                        // Change quantity
                                                                                        function changeQty(id, delta){
                                                                                            const item = cart.find(i=>i.id===id);
                                                                                                if(item){
                                                                                                        item.qty += delta;
                                                                                                                if(item.qty <=0) removeFromCart(id);
                                                                                                                    }
                                                                                                                        updateCartCount();
                                                                                                                            renderCart();
                                                                                                                            }

                                                                                                                            // Render cart modal
                                                                                                                            function renderCart(){
                                                                                                                                if(!cartBox) return;
                                                                                                                                    cartBox.innerHTML = `
                                                                                                                                            <span class="close-btn" onclick="cartModal.style.display='none'">&times;</span>
                                                                                                                                                    <h3>My Cart</h3>
                                                                                                                                                            <div class="cart-items">
                                                                                                                                                                        ${cart.map(item=>`
                                                                                                                                                                                        <div style="display:flex;justify-content:space-between;margin:10px 0;align-items:center;">
                                                                                                                                                                                                            <div>${item.name} x ${item.qty}</div>
                                                                                                                                                                                                                                <div>
                                                                                                                                                                                                                                                        ₹${item.price*item.qty} 
                                                                                                                                                                                                                                                                                <button onclick="changeQty(${item.id},1)">+</button>
                                                                                                                                                                                                                                                                                                        <button onclick="changeQty(${item.id},-1)">-</button>
                                                                                                                                                                                                                                                                                                                                <button onclick="removeFromCart(${item.id})">Remove</button>
                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                `).join('')}
                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                <div style="margin-top:10px;font-weight:bold;">Total: ₹${cart.reduce((acc,i)=>acc+i.price*i.qty,0)}</div>
                                                                                                                                                                                                                                                                                                                                                                                                        <button style="margin-top:10px;padding:8px 15px;background:#183b56;color:#fff;border:none;border-radius:5px;cursor:pointer;">Proceed to Checkout</button>
                                                                                                                                                                                                                                                                                                                                                                                                            `;
                                                                                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                                                                                            // ---------------- Display Products ----------------
                                                                                                                                                                                                                                                                                                                                                                                                            const productContainer = document.getElementById('productContainer');
                                                                                                                                                                                                                                                                                                                                                                                                            function displayProducts(list){
                                                                                                                                                                                                                                                                                                                                                                                                                productContainer.innerHTML='';
                                                                                                                                                                                                                                                                                                                                                                                                                    list.forEach(p=>{
                                                                                                                                                                                                                                                                                                                                                                                                                            const div=document.createElement('div');
                                                                                                                                                                                                                                                                                                                                                                                                                                    div.className='product-card';
                                                                                                                                                                                                                                                                                                                                                                                                                                            div.setAttribute('data-category',p.category);
                                                                                                                                                                                                                                                                                                                                                                                                                                                    div.innerHTML=`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                <img src="${p.img}" alt="${p.name}">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <h3>${p.name}</h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <p class="cat">${p.category}</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div class="price">₹${p.price}</div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <button onclick="addToCart(${p.id})">Add to Cart</button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        `;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                productContainer.appendChild(div);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    displayProducts(products);