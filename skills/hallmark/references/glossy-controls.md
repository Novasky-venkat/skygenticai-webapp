# High-Fidelity Glossy Controls Reference

### 1. Glossy Sapphire Primary Button
```css
.btn-glossy-primary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%);
  color: #ffffff;
  padding: 8px 10px 8px 24px;
  border-radius: 3rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  min-height: 48px;
  position: relative;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.6),
              inset 0 -1px 0 0 rgba(0, 0, 0, 0.35),
              0 4px 16px rgba(37, 99, 235, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-glossy-primary:hover {
  transform: translateY(-2px);
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.7),
              0 8px 24px rgba(37, 99, 235, 0.5);
}
```

### 2. Glossy Obsidian Secondary Button
```css
.btn-glossy-secondary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
  color: #ffffff;
  padding: 8px 10px 8px 24px;
  border-radius: 3rem;
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  cursor: pointer;
  min-height: 48px;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.25),
              inset 0 -1px 0 0 rgba(0, 0, 0, 0.5),
              0 4px 16px rgba(0, 0, 0, 0.4);
}
```

### 3. Frosted Crystal Glass Button
```css
.btn-glossy-glass {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  padding: 8px 10px 8px 24px;
  border-radius: 3rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(24px) saturate(180%);
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.45),
              0 4px 20px rgba(0, 0, 0, 0.15);
}
```
