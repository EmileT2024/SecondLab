-- Example seed data for lab inventory

INSERT INTO users (username, password, role) VALUES
('admin', '$2b$10$examplehashedpassword', 'admin'); -- replace with real bcrypt hash

INSERT INTO materials (material_name, category, description, unit_of_measure, quantity_in_stock, minimum_stock_level, expiry_date, storage_location, supplier_name) VALUES
('Acetone', 'Chemical', 'Solvent', 'Liters', 50, 10, '2025-12-31', 'Shelf A', 'ChemSupplies'),
('Microscope Slides', 'Consumable', 'Glass slides for microscopy', 'Boxes', 20, 5, NULL, 'Cabinet 1', 'LabGoods'),
('Beaker 500ml', 'Equipment', 'Glass beaker', 'Pieces', 15, 2, NULL, 'Shelf B', 'GlassWare Inc.');

INSERT INTO stock_movements (material_id, movement_type, quantity, movement_date, recorded_by, remarks) VALUES
(1, 'Stock In', 50, NOW(), 'admin', 'Initial stock'),
(2, 'Stock In', 20, NOW(), 'admin', 'Initial stock');

INSERT INTO restocks (material_id, quantity_added, supplier_name, restock_date, invoice_reference) VALUES
(1, 20, 'ChemSupplies', NOW(), 'INV-001');

INSERT INTO usages (material_id, quantity_used, usage_date, used_by, purpose) VALUES
(1, 5, NOW(), 'Dr. Smith', 'Sample preparation');