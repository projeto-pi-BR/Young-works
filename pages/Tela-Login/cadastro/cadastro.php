<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$db   = 'sistema_login';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome      = $_POST['nome'];
    $sobrenome = $_POST['Sobrenome'];
    $email     = $_POST['e-mail'];
    $senha     = $_POST['senha'];
    $confSenha = $_POST['confSenha'];

    if ($senha !== $confSenha) {
        die("As senhas não coincidem.");
    }

    $senha_hash = password_hash($senha, PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        die("Erro na preparação: " . $conn->error);
    }

    $stmt->bind_param("ssss", $nome, $sobrenome, $email, $senha_hash);
    if ($stmt->execute()) {
        echo "Cadastro realizado com sucesso! <a href='../index.html'>Ir para login</a>";
    } else {
        echo "Erro no cadastro: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>