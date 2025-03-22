CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  referred_by VARCHAR(10),       -- The code user typed in
  referral_code VARCHAR(10) UNIQUE,  -- The code assigned to this user
  role VARCHAR(50) DEFAULT 'New User',
  balance DECIMAL(10,2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE vip_packages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vip_level VARCHAR(10) NOT NULL UNIQUE, -- e.g., VIP 1, VIP 2, VIP 3
    min_balance DECIMAL(10, 2),
    max_balance DECIMAL(10, 2),
    commission_rate DECIMAL(5, 2), -- percentage
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vip_id INT,
    name VARCHAR(255),
    image VARCHAR(255),
    commission DECIMAL(5, 2),
    FOREIGN KEY (vip_id) REFERENCES vip_packages(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE deposits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    method VARCHAR(50),
    status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
    transaction_id VARCHAR(255),
    proof_image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE withdrawals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    wallet_address VARCHAR(255),
    method VARCHAR(50),
    status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
