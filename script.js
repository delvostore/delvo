const categoriesData = {
    'snacks': {
        name: 'سناكات',
        items: [
            { id: 'snack1', name: 'فروج مشوي', price: 10000, image: 'https://i.imgur.com/IQBlQwH.png', description: 'بدون صوص حار' },
            { id: 'snack2', name: 'بطاطا', price: 10000, image: 'https://i.imgur.com/hR6XZSC.png', description: 'بطاطا مقلية' }
        ]
    },
    'vegetables_fruits': {
        name: 'خضروات و فواكه',
        items: [
            { id: 'veg1', name: 'موز', price: 8699, subPrice: '115.99/كغ', image: 'https://i.imgur.com/g7vRk2L.png', description: '750 غرام' },
            { id: 'veg2', name: 'خوخ', price: 6999, subPrice: '0/كغ', image: 'https://i.imgur.com/8Q0vM7a.png', description: '500 غرام' },
            { id: 'veg3', name: 'نكتارين', price: 7999, subPrice: '0/كغ', image: 'https://i.imgur.com/E0n7u4Z.png', description: '500 غرام' },
            { id: 'veg4', name: 'عنب', price: 6950, subPrice: '0/كغ', image: 'https://i.imgur.com/Xy1Qx1g.png', description: '500 غرام' },
            { id: 'veg5', name: 'بطيخ', price: 8499, subPrice: '0/كغ', image: 'https://i.imgur.com/mJ49Kx9.png', description: '7-8 كغ' },
            { id: 'veg6', name: 'شمام', price: 7499, subPrice: '0/كغ', image: 'https://i.imgur.com/eN61b4i.png', description: '2.5 - 3 كغ' },
            { id: 'veg7', name: 'برتقال', price: 10999, subPrice: '0/كغ', image: 'https://i.imgur.com/jM8vj7f.png', description: '1 كغ' },
            { id: 'veg8', name: 'برتقال للعصير', price: 16999, subPrice: '85.00/كغ', image: 'https://i.imgur.com/r62Yd12.png', description: 'عصير' }
        ]
    },
    'legumes': {
        name: 'بقوليات',
        items: [
            { id: 'leg1', name: 'عدس أحمر', price: 5000, image: 'https://i.imgur.com/1G0H5fO.png', description: '1 كغ' },
            { id: 'leg2', name: 'حمص', price: 4500, image: 'https://i.imgur.com/0P6yD8H.png', description: '500 غرام' },
            { id: 'leg3', name: 'فاصولياء بيضاء', price: 6000, image: 'https://i.imgur.com/eZ4N6zN.png', description: '1 كغ' }
        ]
    },
    'groceries': {
        name: 'غذائيات',
        items: [
            { id: 'gro1', name: 'مرتديلا دجاج', price: 15000, image: 'https://i.imgur.com/a9JkR3i.png', description: 'بالفستق - 250 غرام' },
            { id: 'gro2', name: 'جبنة بيضاء', price: 20000, image: 'https://i.imgur.com/e2oO7m2.png', description: 'عكاوي - 500 غرام' },
            { id: 'gro3', name: 'لبنة', price: 12500, image: 'https://i.imgur.com/tC7Fqg1.png', description: 'لبنة بقر - 500 غرام' },
            { id: 'gro4', name: 'زيتون أخضر', price: 9000, image: 'https://i.imgur.com/P4vXm83.png', description: 'حبة كبيرة - 1 كغ' },
            { id: 'gro5', name: 'مخلل خيار', price: 6500, image: 'https://i.imgur.com/o7hM7vO.png', description: 'جاط مخلل - 500 غرام' }
        ]
    },
    // NEW: Fast Food Category
    'fast_food': {
        name: 'الوجبات السريعة',
        items: [
            { id: 'fast1', name: 'ساندويش برجر', price: 25000, image: 'https://i.imgur.com/IQBlQwH.png', description: 'برجر لحم مع الخضار والجبن' },
            { id: 'fast2', name: 'بطاطا مقلية', price: 10000, image: 'https://i.imgur.com/hR6XZSC.png', description: 'بطاطا مقلية مقرمشة' },
            { id: 'fast3', name: 'بيتزا', price: 35000, image: 'https://i.imgur.com/0P6yD8H.png', description: 'بيتزا بالخضار والجبن' },
            { id: 'fast4', name: 'ساندويش شاورما', price: 22000, image: 'https://i.imgur.com/1G0H5fO.png', description: 'شاورما دجاج مع ثوم ومخلل' }
        ]
    }
};

const navItems = document.querySelectorAll('.bottom-nav .nav-item');
const pages = document.querySelectorAll('.page-container');
const loadingOverlay = document.getElementById('loadingOverlay');
const floatingCart = document.getElementById('floatingCart');

// Slider functionality
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderDots = document.querySelectorAll('.slider-dots .dot');
let currentIndex = 0;
const slideCount = sliderDots.length;

function goToSlide(index) {
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
    sliderDots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
    currentIndex = index;
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

let slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    goToSlide(currentIndex);
}, 3000); // Change slide every 3 seconds

// Pause slider on hover
sliderWrapper.addEventListener('mouseenter', () => clearInterval(slideInterval));
sliderWrapper.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        goToSlide(currentIndex);
    }, 3000);
});

// New: Notes elements
const notesBtn = document.getElementById('notesBtn');
const notesContainer = document.getElementById('notesContainer');
const notesInput = document.getElementById('notesInput');
const saveNotesBtn = document.getElementById('saveNotesBtn');
let currentNotes = "";

notesBtn.addEventListener('click', () => {
    notesContainer.style.display = 'flex';
    notesInput.value = currentNotes;
    notesInput.focus();
    notesBtn.classList.add('hidden');
});

saveNotesBtn.addEventListener('click', () => {
    currentNotes = notesInput.value.trim();
    notesContainer.style.display = 'none';
    notesBtn.classList.remove('hidden');
});

function showPage(target) {
    loadingOverlay.classList.add('active');
    setTimeout(() => {
        pages.forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById(`${target}Page`);
        if (targetPage) {
            targetPage.classList.add('active');
            if (target === 'cart') {
                displayCart();
                floatingCart.classList.remove('visible'); // Hide floating cart on cart page
            } else if (target === 'favorites') {
                updateFavoritesUI(); // NEW: Call function to update favorites page
                updateFloatingCart(); // Show floating cart if not empty
            } else if (target === 'settings') {
                animateSettingsPage();
                updateFloatingCart(); // Show floating cart if not empty
            } else if (target === 'notifications') {
                animateNotificationsPage();
                updateFloatingCart(); // Show floating cart if not empty
            } else {
                 updateFloatingCart(); // Show floating cart if not empty
            }
        }
        loadingOverlay.classList.remove('active');
    }, 500);
}

function animateSettingsPage() {
    document.querySelectorAll('#settingsPage .fade-in-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-card');
    });
}

function animateNotificationsPage() {
    document.querySelectorAll('#notificationsPage .fade-in-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-card');
    });
}

navItems.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        const target = item.getAttribute('data-target');
        navItems.forEach(i => i.classList.remove('active', 'shake'));
        item.classList.add('active', 'shake');
        setTimeout(() => {
            item.classList.remove('shake');
        }, 500);

        showPage(target);
    });
});

const modeBtn = document.getElementById('modeBtn');
modeBtn.addEventListener('change', () => document.body.classList.toggle('dark-mode'));

document.querySelector('.faq-item').addEventListener('click', () => {
    document.getElementById('faqPopup').classList.toggle('active');
});

document.querySelectorAll('[data-policy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        openPolicy(e.target.dataset.policy);
    });
});

function openPolicy(type) {
    const overlay = document.getElementById('modalOverlay');
    const titleEl = document.getElementById('modalTitle');
    const textEl = document.getElementById('modalText');
    if (type === 'privacy') {
        titleEl.textContent = 'سياسة الخصوصية';
        textEl.innerHTML = 'هذا الموقع لا يحتوي على أي وسيلة للدفع الإلكتروني ولا يقوم بجمع أي بيانات شخصية مثل الاسم، العنوان أو أرقام الهواتف، جميع المعاملات تتم حصرياً عبر تطبيق واتس اب أو المكالمات الهاتفية، وبموافقتك الشخصية الكاملة.';
    } else {
        titleEl.textContent = 'الشروط والأحكام';
        textEl.innerHTML = 'باستخدام هذا الموقع، فإنك توافق على أن جميع الطلبات والمعاملات تتم بشكل مباشر عبر الاتصال أو واتس اب، وأن الموقع لا يتحمل أي مسؤولية عن أي بيانات غير مقدمة طواعية منك. جميع الحقوق محفوظة.';
    }
    overlay.classList.add('active');
}

document.querySelector('.modal-close').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', overlayClick);

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}

function overlayClick(event) {
    const content = document.getElementById('modalContent');
    if (!content.contains(event.target)) {
        closeModal();
    }
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || []; // NEW: Favorites list
let deliveryFee = 12000;
let discountValue = 0;
let promoApplied = false;

const areaFees = {
    "حي العمارة": 12000,
    "حي الدريبة": 12000,
    "حي العزة": 12000,
    "حي الفيض": 12000,
    "حي الصليبة": 12000,
    "حي الجبيبات": 12000,
    "حي الجركس": 12000,
    "قرب الميناء البحري ( الكورنيش )": 12000,
};

const areaModalOverlay = document.getElementById('areaModal');
const selectedAreaBtn = document.getElementById('selectedArea');
const areaNameSpan = document.getElementById('areaName');
const promoCodeInput = document.getElementById('promoCodeInput');
const applyPromoBtn = document.getElementById('applyPromoBtn');
const promoMessage = document.getElementById('promoMessage');
const discountRow = document.getElementById('discountRow');
const discountValueEl = document.getElementById('discountValue');
const deliveryFeeEl = document.getElementById('deliveryFee');

let selectedArea = localStorage.getItem('selectedArea') || Object.keys(areaFees)[0];
areaNameSpan.textContent = selectedArea;

selectedAreaBtn.addEventListener('click', openAreaModal);

function openAreaModal() {
    const areaList = document.getElementById('areaList');
    areaList.innerHTML = '';
    for (const area in areaFees) {
        const li = document.createElement('li');
        li.textContent = area;
        if (area === selectedArea) {
            li.style.fontWeight = 'bold';
            li.style.color = '#FFA500';
        }
        li.addEventListener('click', () => {
            selectedArea = area;
            localStorage.setItem('selectedArea', selectedArea);
            areaNameSpan.textContent = selectedArea;
            updateCartTotals();
            closeAreaModal();
        });
        areaList.appendChild(li);
    }
    areaModalOverlay.classList.remove('closing');
    areaModalOverlay.classList.add('active');
}

function closeAreaModal() {
    areaModalOverlay.classList.add('closing');
    setTimeout(() => {
        areaModalOverlay.classList.remove('active', 'closing');
    }, 300);
}

areaModalOverlay.addEventListener('click', (e) => {
    if (e.target.id === 'areaModal') {
        closeAreaModal();
    }
});

document.querySelector('#areaModal .modal-close').addEventListener('click', closeAreaModal);

applyPromoBtn.addEventListener('click', applyPromoCode);

function applyPromoCode() {
    const code = promoCodeInput.value.trim().toUpperCase();
    if (code === "DELVONEW") {
        if (!promoApplied) {
            promoApplied = true;
            discountValue = areaFees[selectedArea];
            promoMessage.textContent = 'تم تطبيق الخصم بنجاح! 🎉';
            promoMessage.className = 'promo-code-message success';
            updateCartTotals();
        } else {
            promoMessage.textContent = 'الخصم مطبق بالفعل.';
            promoMessage.className = 'promo-code-message error';
        }
    } else {
        promoApplied = false;
        discountValue = 0;
        promoMessage.textContent = 'كود خصم غير صحيح.';
        promoMessage.className = 'promo-code-message error';
        updateCartTotals();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function updateCartUI() {
    displayCart();
    updateFloatingCart();
    renderAllFoodItems();
    updateCartTotals();
    saveCart();
}

function updateCartTotals() {
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
    const deliveryFeeRow = document.querySelector('.summary-row.delivery-fee');

    let subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    deliveryFee = areaFees[selectedArea] || 0;

    if (promoApplied) {
        discountValue = deliveryFee;
        deliveryFeeEl.innerHTML = `<span class="price-strike">${deliveryFee.toLocaleString('en-US')} ل.س</span> <span class="price-new">0 ل.س</span>`;
    } else {
        discountValue = 0;
        deliveryFeeEl.innerHTML = `${deliveryFee.toLocaleString('en-US')} ل.س`;
    }

    const total = subtotal + (deliveryFee - discountValue);

    subtotalEl.textContent = `${subtotal.toLocaleString('en-US')} ل.س`;
    totalEl.textContent = `${total.toLocaleString('en-US')} ل.س`;
}

function renderAllFoodItems() {
    renderFoodItems('snacksGrid', 'snacks');
    renderFoodItems('vegetables_fruitsGrid', 'vegetables_fruits');
    renderFoodItems('legumesGrid', 'legumes');
    renderFoodItems('groceriesGrid', 'groceries');
    renderFoodItems('fast_foodGrid', 'fast_food');
}

// NEW FUNCTION: Toggle favorite status
function toggleFavorite(id) {
    const existingIndex = favorites.findIndex(fav => fav.id === id);
    let product = null;

    // Search for the product in all categories
    for (let category in categoriesData) {
        product = categoriesData[category].items.find(item => item.id === id);
        if (product) break;
    }

    if (!product) return;

    if (existingIndex !== -1) {
        favorites.splice(existingIndex, 1);
        showToast('تمت الإزالة من المفضلة');
    } else {
        favorites.push(product);
        showToast('تمت الإضافة إلى المفضلة');
    }

    saveFavorites();
    renderAllFoodItems();
    if (document.getElementById('favoritesPage').classList.contains('active')) {
        updateFavoritesUI();
    }
}

// NEW FUNCTION: Update Favorites UI
function updateFavoritesUI() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    favoritesGrid.innerHTML = '';

    if (favorites.length === 0) {
        favoritesGrid.innerHTML = '<p style="text-align:center;">لا يوجد لديك منتجات مفضلة بعد.</p>';
        return;
    }

    favorites.forEach((item, index) => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item', 'fade-in-card');
        const existingItemInCart = cart.find(cartItem => cartItem.id === item.id);
        const addBtnDisplay = existingItemInCart ? 'none' : 'flex';
        const quantityControlVisible = existingItemInCart ? 'visible' : '';

        const isFavorite = favorites.some(fav => fav.id === item.id);
        const favoriteIconClass = isFavorite ? 'fas' : 'far';

        foodItem.innerHTML = `
            <div class="image-container">
                <img src="${item.image}">
                <button class="favorite-btn" data-id="${item.id}">
                    <i class="${favoriteIconClass} fa-heart"></i>
                </button>
            </div>
            <h4>${item.name}</h4>
            <span class="price">${item.price.toLocaleString()} ل.س</span>
            <button class="add-to-cart-btn" data-id="${item.id}" style="display: ${addBtnDisplay};">
                <i class="fas fa-plus"></i>
            </button>
            <div class="quantity-control-product ${quantityControlVisible}">
                <button class="product-btn-add" data-id="${item.id}">+</button>
                <span class="item-quantity">${existingItemInCart ? existingItemInCart.quantity : 1}</span>
                <button class="product-btn-subtract" data-id="${item.id}">-</button>
            </div>
        `;

        foodItem.style.animationDelay = `${index * 0.1}s`;

        foodItem.addEventListener('click', (event) => {
            if (!event.target.closest('.add-to-cart-btn, .quantity-control-product button, .favorite-btn')) {
                openProductModal(item.id);
            }
        });

        foodItem.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            updateItemQuantity(e.currentTarget.dataset.id, 1);
        });

        foodItem.querySelectorAll('.quantity-control-product button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                updateItemQuantity(e.currentTarget.dataset.id, btn.classList.contains('product-btn-add') ? 1 : -1);
            });
        });

        foodItem.querySelector('.favorite-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(e.currentTarget.dataset.id);
        });

        favoritesGrid.appendChild(foodItem);
    });
}

function displayCart() {
    const cartItemsEl = document.getElementById('cartItems');
    const addMoreBtn = document.getElementById('addMoreBtn');
    const notesBtn = document.getElementById('notesBtn');
    const checkoutBtnContainer = document.querySelector('.checkout-container');
    const deliverySection = document.querySelector('.delivery-section');
    const promoSection = document.querySelector('.promo-section');
    const paymentMethod = document.querySelector('.payment-method');
    const orderSummary = document.querySelector('.order-summary');

    cartItemsEl.innerHTML = '';
    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p style="text-align:center;">السلة فارغة حالياً.</p>';
        addMoreBtn.classList.add('hidden');
        notesBtn.classList.add('hidden');
        notesContainer.style.display = 'none';
        notesInput.value = '';
        checkoutBtnContainer.classList.add('hidden');
        deliverySection.classList.add('hidden');
        promoSection.classList.add('hidden');
        paymentMethod.classList.add('hidden');
        orderSummary.classList.add('hidden');
        return;
    }

    addMoreBtn.classList.remove('hidden');
    notesBtn.classList.remove('hidden');
    checkoutBtnContainer.classList.remove('hidden');
    deliverySection.classList.remove('hidden');
    promoSection.classList.remove('hidden');
    paymentMethod.classList.remove('hidden');
    orderSummary.classList.remove('hidden');

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        const itemHtml = `
            <div class="cart-item fade-in-card" style="animation-delay: ${index * 0.1}s;">
                <div class="item-actions">
                    <span class="delete-btn" data-id="${item.id}">
                        <i class="fas fa-trash-can"></i>
                    </span>
                    <div class="quantity-control">
                        <button class="cart-btn-add" data-id="${item.id}">+</button>
                        <span>${item.quantity}</span>
                        <button class="cart-btn-subtract" data-id="${item.id}">-</button>
                    </div>
                </div>
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>${item.description}</p>
                    <span class="price">${itemTotal.toLocaleString('en-US')} ل.س</span>
                </div>
                <img class="item-img" src="${item.image}">
            </div>
        `;
        cartItemsEl.innerHTML += itemHtml;
    });

    cartItemsEl.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
    });
    cartItemsEl.querySelectorAll('.cart-btn-add').forEach(btn => {
        btn.addEventListener('click', () => changeQuantity(btn.dataset.id, 1));
    });
    cartItemsEl.querySelectorAll('.cart-btn-subtract').forEach(btn => {
        btn.addEventListener('click', () => changeQuantity(btn.dataset.id, -1));
    });

    document.querySelectorAll('#cartPage .fade-in-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-card');
    });
}

function changeQuantity(id, amount) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateCartUI();
        }
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function renderFoodItems(containerId, category) {
    const foodGrid = document.getElementById(containerId);
    const items = categoriesData[category].items;
    foodGrid.innerHTML = '';

    items.forEach((item, index) => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item', 'fade-in-card');
        const existingItemInCart = cart.find(cartItem => cartItem.id === item.id);
        const addBtnDisplay = existingItemInCart ? 'none' : 'flex';
        const quantityControlVisible = existingItemInCart ? 'visible' : '';
        const isFavorite = favorites.some(fav => fav.id === item.id);
        const favoriteIconClass = isFavorite ? 'fas' : 'far';

        foodItem.innerHTML = `
            <div class="image-container">
                <img src="${item.image}">
                <button class="favorite-btn" data-id="${item.id}">
                    <i class="${favoriteIconClass} fa-heart"></i>
                </button>
            </div>
            <h4>${item.name}</h4>
            <span class="price">${item.price.toLocaleString()} ل.س</span>
            <button class="add-to-cart-btn" data-id="${item.id}" style="display: ${addBtnDisplay};">
                <i class="fas fa-plus"></i>
            </button>
            <div class="quantity-control-product ${quantityControlVisible}">
                <button class="product-btn-add" data-id="${item.id}">+</button>
                <span class="item-quantity">${existingItemInCart ? existingItemInCart.quantity : 1}</span>
                <button class="product-btn-subtract" data-id="${item.id}">-</button>
            </div>
        `;

        foodItem.style.animationDelay = `${index * 0.1}s`;

        foodItem.addEventListener('click', (event) => {
            if (!event.target.closest('.add-to-cart-btn, .quantity-control-product button, .favorite-btn')) {
                openProductModal(item.id);
            }
        });

        foodItem.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            updateItemQuantity(e.currentTarget.dataset.id, 1);
        });

        foodItem.querySelectorAll('.quantity-control-product button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                updateItemQuantity(e.currentTarget.dataset.id, btn.classList.contains('product-btn-add') ? 1 : -1);
            });
        });

        foodItem.querySelector('.favorite-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(e.currentTarget.dataset.id);
        });

        foodGrid.appendChild(foodItem);
    });
}

function showCategory(category) {
    const pageId = `${category}Page`;
    const page = document.getElementById(pageId);
    pages.forEach(p => p.classList.remove('active'));
    page.classList.add('active');
    const containerId = `${category}Grid`;
    renderFoodItems(containerId, category);
    updateFloatingCart(); // Show floating cart
}

function hidePages() {
    document.querySelectorAll('.page-container').forEach(page => page.classList.remove('active'));
    document.querySelector('.nav-item[data-target="home"]').click();
}

document.querySelectorAll('.back-arrow').forEach(btn => {
    btn.addEventListener('click', hidePages);
});

document.getElementById('addMoreBtn').addEventListener('click', hidePages);

function updateFloatingCart() {
    const floatingCart = document.getElementById('floatingCart');
    const floatingCartCount = document.getElementById('floatingCartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    floatingCartCount.textContent = totalItems;

    const currentPage = document.querySelector('.page-container.active');
    const isCartPage = currentPage && currentPage.id === 'cartPage';

    if (totalItems > 0 && !isCartPage) {
        floatingCart.classList.add('visible');
    } else {
        floatingCart.classList.remove('visible');
    }
}

document.getElementById('floatingCart').addEventListener('click', () => {
    document.querySelector('.nav-item[data-target="cart"]').click();
});

let currentProduct = null;
let currentQuantity = 1;

function openProductModal(id) {
    let product = null;
    for (let category in categoriesData) {
        product = categoriesData[category].items.find(item => item.id === id);
        if (product) break;
    }
    if (!product) return;

    currentProduct = product;
    const modalOverlay = document.getElementById('productModal');
    const imageEl = document.getElementById('productModalImage');
    const titleEl = document.getElementById('productModalTitle');
    const descriptionEl = document.getElementById('productModalDescription');
    const priceEl = document.getElementById('productModalPrice');

    imageEl.src = currentProduct.image;
    titleEl.textContent = currentProduct.name;
    descriptionEl.textContent = currentProduct.description;
    priceEl.textContent = `${currentProduct.price.toLocaleString()} ل.س`;

    currentQuantity = 1;
    document.getElementById('modalQuantity').textContent = currentQuantity;
    modalOverlay.classList.add('active');
}

function hideProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

document.getElementById('productModal').addEventListener('click', (e) => {
    if (e.target.id === 'productModal') {
        hideProductModal();
    }
});

document.querySelector('.product-modal-close').addEventListener('click', hideProductModal);

document.getElementById('modalAddBtn').addEventListener('click', () => {
    currentQuantity++;
    document.getElementById('modalQuantity').textContent = currentQuantity;
});

document.getElementById('modalSubtractBtn').addEventListener('click', () => {
    if (currentQuantity > 1) {
        currentQuantity--;
        document.getElementById('modalQuantity').textContent = currentQuantity;
    }
});

document.getElementById('modalAddToCartBtn').addEventListener('click', () => {
    let existingItem = cart.find(item => item.id === currentProduct.id);
    if (existingItem) {
        existingItem.quantity += currentQuantity;
    } else {
        cart.push({ ...currentProduct, quantity: currentQuantity });
    }
    showToast(`${currentProduct.name} تمت إضافته إلى السلة!`);
    updateCartUI();
    hideProductModal();
    document.getElementById('floatingCart').classList.add('shake');
    setTimeout(() => {
        document.getElementById('floatingCart').classList.remove('shake');
    }, 500);
});

function updateItemQuantity(id, amount) {
    let existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += amount;
        if (existingItem.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateCartUI();
        }
    } else if (amount > 0) {
        let product = null;
        for (let category in categoriesData) {
            product = categoriesData[category].items.find(item => item.id === id);
            if (product) break;
        }
        if (product) {
            cart.push({ ...product, quantity: 1 });
            updateCartUI();
        }
    }
}

function showToast(message) {
    const toast = document.getElementById('toastMessage');
    toast.querySelector('span').textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Search functionality
const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestionsList');

let allProducts = [];
function collectAllProducts() {
    allProducts = [];
    for (const category in categoriesData) {
        allProducts = allProducts.concat(categoriesData[category].items.map(item => ({
            ...item,
            category: category
        })));
    }
}
collectAllProducts();

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    if (query.length > 0) {
        const matches = allProducts.filter(product =>
            product.name.includes(query) ||
            (product.description && product.description.includes(query)) ||
            (categoriesData[product.category] && categoriesData[product.category].name.includes(query))
        );
        displaySuggestions(matches);
    } else {
        suggestionsList.classList.remove('show');
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        suggestionsList.classList.remove('show');
    }
});

function displaySuggestions(matches) {
    suggestionsList.innerHTML = '';
    if (matches.length > 0) {
        matches.forEach(product => {
            const li = document.createElement('li');
            li.classList.add('suggestion-item');
            li.innerHTML = `
                <span>${product.name}</span>
                <img src="${product.image}" alt="${product.name}">
            `;
            li.addEventListener('click', () => {
                openProductModal(product.id);
                suggestionsList.classList.remove('show');
            });
            suggestionsList.appendChild(li);
        });
        suggestionsList.classList.add('show');
    } else {
        suggestionsList.classList.remove('show');
    }
}

document.querySelector('.checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('السلة فارغة!');
        return;
    }

    const notes = currentNotes;
    const areaName = selectedArea;
    let orderSummary = `مرحباً، أود أن أطلب من ${areaName}:
`;

    let subtotal = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        orderSummary += `- ${item.name} (${item.quantity}) - السعر: ${itemTotal.toLocaleString()} ل.س
`;
    });

    const deliveryFeeFinal = promoApplied ? 0 : areaFees[selectedArea];
    const total = subtotal + deliveryFeeFinal;

    orderSummary += `
المبلغ الإجمالي: ${subtotal.toLocaleString()} ل.س`;

    if (promoApplied) {
        orderSummary += `
الخصم: ${deliveryFee.toLocaleString()} ل.س
`;
    }

    orderSummary += `
قيمة التوصيل إلى ${areaName}: ${deliveryFeeFinal.toLocaleString()} ل.س`;

    if (notes) {
        orderSummary += `
الملاحظات: ${notes}`;
    }

    const phoneNumber = '963999999999';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderSummary)}`;
    window.open(whatsappUrl, '_blank');
    currentNotes = ""; // تفريغ الملاحظات بعد الإرسال
    notesInput.value = '';
    notesContainer.style.display = 'none';
    notesBtn.classList.remove('hidden');
});

updateCartUI();



document.addEventListener('DOMContentLoaded', (event) => {
    const splashScreen = document.getElementById('splash-screen');
    const splashVideo = document.getElementById('splash-video');
    const mainContent = document.getElementById('main-content');

    // محاولة تشغيل الفيديو تلقائيًا
    splashVideo.play().catch(error => {
        console.error("Autoplay was prevented:", error);
        // إذا فشل التشغيل التلقائي، قم بإخفاء السبلاش سكرين بعد 5 ثواني
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.style.display = 'block';
            setTimeout(() => {
                mainContent.style.opacity = '1';
            }, 50);
        }, 5000); // 5000ms = 5 ثواني
    });

    // إخفاء السبلاش سكرين بعد انتهاء الفيديو
    splashVideo.onended = () => {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'block';
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 50);
    };
});