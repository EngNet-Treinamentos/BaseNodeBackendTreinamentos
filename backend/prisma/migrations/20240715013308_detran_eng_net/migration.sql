-- CreateTable
CREATE TABLE `Motorista` (
    `nome` VARCHAR(100) NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `categoria_cnh` VARCHAR(2) NOT NULL,
    `vencimento_cnh` DATETIME NOT NULL,

    PRIMARY KEY (`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Multa` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `valor` DECIMAL(9, 2) NOT NULL,
    `pontos` INTEGER UNSIGNED NOT NULL,
    `data` DATETIME NOT NULL,
    `tipo` VARCHAR(80) NOT NULL,
    `placa_carro` VARCHAR(7) NOT NULL,

    INDEX `Multa_placa_carro_idx`(`placa_carro`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Carro` (
    `placa` VARCHAR(7) NOT NULL,
    `marca` VARCHAR(100) NOT NULL,
    `modelo` VARCHAR(100) NOT NULL,
    `ano` INTEGER UNSIGNED NOT NULL,
    `cor` VARCHAR(100) NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,

    INDEX `Carro_cpf_idx`(`cpf`),
    PRIMARY KEY (`placa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Multa` ADD CONSTRAINT `Multa_placa_carro_fkey` FOREIGN KEY (`placa_carro`) REFERENCES `Carro`(`placa`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Carro` ADD CONSTRAINT `Carro_cpf_fkey` FOREIGN KEY (`cpf`) REFERENCES `Motorista`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;
