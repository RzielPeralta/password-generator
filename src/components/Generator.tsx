// src/components/PasswordGenerator.tsx
import React, { useState } from "react";

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(12);
  const [includeLower, setIncludeLower] = useState<boolean>(true);
  const [includeUpper, setIncludeUpper] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSpecial, setIncludeSpecial] = useState<boolean>(true);

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_-+=[]{}|;:,.<>?";

  const generatePassword = () => {
    let passwordChar = "";
    if (includeLower) passwordChar += lowercaseChars;
    if (includeUpper) passwordChar += uppercaseChars;
    if (includeNumbers) passwordChar += numberChars;
    if (includeSpecial) passwordChar += specialChars;

    if (passwordChar.length === 0) return;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * passwordChar.length);
      newPassword += passwordChar[randomIndex];
    }

    setPassword(newPassword);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Password Generator</h1>
      <div>
        <label>Longitud: </label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          min="4"
          max="20"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeLower}
              onChange={() => setIncludeLower(!includeLower)}
            />
            Incluir minúsculas
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeUpper}
              onChange={() => setIncludeUpper(!includeUpper)}
            />
            Incluir Mayúsculas
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Incluir números
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeSpecial}
              onChange={() => setIncludeSpecial(!includeSpecial)}
            />
            Incluir carácteres especiales
          </label>
        </div>
      </div>
      <button
        onClick={generatePassword}
        style={{ margin: "10px", padding: "10px 20px" }}
      >
        Generar
      </button>
      {password && (
        <div>
          <p>
            <strong>Tu contraseña generada es: </strong>
          </p>
          <input
            type="text"
            value={password}
            readOnly
            style={{
              backgroundColor: "transparent",
              color: "white",
              textAlign: "center",
              fontSize: "38px",
              border: "none",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
