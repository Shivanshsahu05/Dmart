// dummy data for orders
const orders = [
    { id: 1234, status: 'Delivered', date: '12/02/2023' },
    { id: 5678, status: 'Delivered', date: '15/02/2023' },
    { id: 9012, status: 'Pending', date: '' }
];

// display orders
const ordersList = document.querySelector('.orders ul');
orders.forEach((order) => {
    const orderHTML = `
        <li>
            <p>Order #${order.id}</p>
            <p>${order.status} on ${order.date}</p>
        </li>
    `;
    ordersList.innerHTML += orderHTML;
});