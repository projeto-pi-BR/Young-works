<?php
// Conexão com o banco de dados
$host = 'localhost';
$user = 'root';
$pass = '';
$db   = 'pi';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Verificador de login
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST['e-mail'];
    $senha = $_POST['senha'];

    $sql = "SELECT senha FROM sistema_login.usuarios WHERE email = ?";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        die("Erro ao preparar a query: " . $conn->error);
    }

    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $row = $result->fetch_assoc();

        if (password_verify($senha, $row['senha'])) {
            echo "Login bem-sucedido!";
            /* terminar no curso
            header("Location: pagina-principal.php");
            exit();
            */
            // redirecionar para página principal, se quiser
        } else {
            echo "Senha incorreta!";
        }
    } else {
        echo "E-mail não encontrado!";
    }

    $stmt->close();
}

$conn->close();
?>
