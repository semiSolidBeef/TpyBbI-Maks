document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = {};
    
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    try {
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (result.status === 'success') {
            alert("Сообщение отправлено успешно");
        } else {
            alert("Произошла ошибка при отправке сообщения");
        }
        
    } catch (error) {
        console.error('Error:', error);
        alert("Произошла ошибка при отправке сообщения");
    }
});
