CREATE DATABASE IF NOT EXISTS mydatabase;
USE mydatabase;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(16) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'manager', 'agent', 'customer_support', 'user') DEFAULT 'user',
    balance FLOAT DEFAULT 0,
    referralCode VARCHAR(10) UNIQUE,
    referredBy INT NULL,
    FOREIGN KEY (referredBy) REFERENCES users(id) ON DELETE SET NULL
);

-- Transactions Table (Deposits & Withdrawals)
CREATE TABLE IF NOT EXISTS transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    amount FLOAT NOT NULL,
    type ENUM('deposit', 'withdrawal') NOT NULL,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    paymentMethod VARCHAR(255) NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

-- Tasks Table (Products)
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    commission FLOAT NOT NULL,
    available BOOLEAN DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Referral Table (Tracking User Referrals)
CREATE TABLE IF NOT EXISTS referrals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    referrerId INT NOT NULL,
    referredUserId INT NOT NULL,
    commissionEarned FLOAT DEFAULT 0,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (referrerId) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (referredUserId) REFERENCES users(id) ON DELETE CASCADE
);

-- Activity Log Table (User and Admin Actions)
CREATE TABLE IF NOT EXISTS activity_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NULL,
    action VARCHAR(255) NOT NULL,
    details TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE SET NULL
);

-- Commission Settings Table (Admin Controlled)
CREATE TABLE IF NOT EXISTS commission_settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    referralCommission FLOAT DEFAULT 5
);
