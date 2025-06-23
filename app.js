async function getUser() {
  try {
    const userInfo = await zmp.getUserInfo();
    document.getElementById('user-info').innerHTML = `
      <p><strong>ID:</strong> ${userInfo.id}</p>
      <p><strong>Tên:</strong> ${userInfo.name}</p>
    `;
  } catch (err) {
    alert("Không thể lấy thông tin người dùng: " + JSON.stringify(err));
  }
}