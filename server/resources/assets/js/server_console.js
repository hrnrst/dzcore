// resources/js/server_console.js

function openServerConsole(serverId) {
  showSwal('Konsol açılıyor...', 'info');
  
  $.ajax({
      type: 'POST',
      url: '/api/server/console/open',
      headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      data: {
          server_id: serverId
      },
      success: function(response) {
          if (response.status === 'ok') {
              Swal.close();
              window.open(response.url, '_blank', 'width=1920,height=1080');
          } else {
              showSwal(response.message, 'error');
          }
      },
      error: function(xhr) {
          let message = 'Konsol açılırken bir hata oluştu';
          if (xhr.responseJSON && xhr.responseJSON.message) {
              message = xhr.responseJSON.message;
          }
          showSwal(message, 'error');
      }
  });
}

function refreshConsoleConnection(serverId) {
  showSwal('Bağlantı yenileniyor...', 'info');
  
  $.ajax({
      type: 'POST',
      url: '/api/server/console/refresh',
      headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      data: {
          server_id: serverId
      },
      success: function(response) {
          if (response.status === 'ok') {
              showSwal('Bağlantı yenilendi', 'success');
          } else {
              showSwal(response.message, 'error');
          }
      },
      error: function(xhr) {
          let message = 'Bağlantı yenilenemedi';
          if (xhr.responseJSON && xhr.responseJSON.message) {
              message = xhr.responseJSON.message;
          }
          showSwal(message, 'error');
      }
  });
}

function checkConsoleConnection(serverId) {
  $.ajax({
      type: 'GET',
      url: '/api/server/console/check',
      headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      data: {
          server_id: serverId
      },
      success: function(response) {
          if (response.status === 'ok') {
              let status = response.connection_status;
              let statusText = status.active ? 'Aktif' : 'Pasif';
              let statusColor = status.active ? 'success' : 'danger';
              
              // Durumu göster
              $('#console-status').html(
                  `<span class="badge badge-${statusColor}">${statusText}</span>` +
                  `<small class="ml-2">${status.connection_count} aktif bağlantı</small>`
              );
          }
      }
  });
}

// Aktif oturumları listele
function getActiveSessions(serverId) {
  $.ajax({
      type: 'GET',
      url: '/api/server/console/sessions',
      headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      data: {
          server_id: serverId
      },
      success: function(response) {
          if (response.status === 'ok') {
              let sessionsHtml = '';
              response.sessions.forEach(function(session) {
                  sessionsHtml += `
                      <tr>
                          <td>${session.username}</td>
                          <td>${new Date(session.startDate).toLocaleString()}</td>
                          <td>${session.remoteHost}</td>
                          <td>
                              <button class="btn btn-sm btn-danger" onclick="killSession('${session.id}')">
                                  <i class="fa fa-times"></i> Sonlandır
                              </button>
                          </td>
                      </tr>
                  `;
              });
              
              $('#active-sessions tbody').html(sessionsHtml);
          }
      }
  });
}

// Oturumu sonlandır
function killSession(sessionId) {
  Swal.fire({
      title: 'Emin misiniz?',
      text: "Bu oturumu sonlandırmak istediğinize emin misiniz?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Evet, sonlandır!',
      cancelButtonText: 'İptal'
  }).then((result) => {
      if (result.isConfirmed) {
          $.ajax({
              type: 'DELETE',
              url: `/api/server/console/sessions/${sessionId}`,
              headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('token')
              },
              success: function(response) {
                  if (response.status === 'ok') {
                      showSwal('Oturum sonlandırıldı', 'success');
                      getActiveSessions(); // Listeyi yenile
                  } else {
                      showSwal(response.message, 'error');
                  }
              },
              error: function(xhr) {
                  let message = 'Oturum sonlandırılamadı';
                  if (xhr.responseJSON && xhr.responseJSON.message) {
                      message = xhr.responseJSON.message;
                  }
                  showSwal(message, 'error');
              }
          });
      }
  });
}