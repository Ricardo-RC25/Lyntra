import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

// Paleta Lyntra
const lyntraColors = {
  primary: '#007BFF',
  backgroundDark: '#121212',
  backgroundLight: '#F9F9F9',
  inputBorder: '#ddd',
  textDark: '#000000',
  textLight: '#FFFFFF',
  grayText: '#999999',
};

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const isDark = useColorScheme() === 'dark';

  const handleRegister = async () => {
    await AsyncStorage.setItem('token', 'fake-token');
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDark ? lyntraColors.backgroundDark : lyntraColors.primary },
      ]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.wrapper}
      >
        <Animated.View
          entering={FadeInDown}
          style={[
            styles.card,
            { backgroundColor: isDark ? '#1e1e1e' : lyntraColors.textLight },
          ]}
        >
          {/* Título */}
          <Text style={[styles.headerText, { color: isDark ? '#fff' : '#000' }]}>Crear cuenta</Text>

          {/* Subtítulo */}
          <Text style={[styles.subtitle, { color: isDark ? '#aaa' : '#666' }]}>
            Regístrate para protegerte estés donde estés.
          </Text>

          {/* Full Name */}
          <View style={[styles.inputWrapper, { borderColor: lyntraColors.inputBorder }]}>
            <MaterialIcons name="person" size={20} color={lyntraColors.grayText} style={styles.inputIcon} />
            <TextInput
              placeholder="Nombre completo"
              placeholderTextColor={lyntraColors.grayText}
              style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
            />
          </View>

          {/* Email */}
          <View style={[styles.inputWrapper, { borderColor: lyntraColors.inputBorder }]}>
            <MaterialIcons name="email" size={20} color={lyntraColors.grayText} style={styles.inputIcon} />
            <TextInput
              placeholder="Correo electrónico"
              placeholderTextColor={lyntraColors.grayText}
              style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
              keyboardType="email-address"
            />
          </View>

          {/* Password */}
          <View style={[styles.inputWrapper, { borderColor: lyntraColors.inputBorder }]}>
            <MaterialIcons name="lock" size={20} color={lyntraColors.grayText} style={styles.inputIcon} />
            <TextInput
              placeholder="Contraseña"
              placeholderTextColor={lyntraColors.grayText}
              style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={20}
                color={lyntraColors.grayText}
                style={styles.inputIconRight}
              />
            </TouchableOpacity>
          </View>

          {/* Date of birth */}
          <View style={[styles.inputWrapper, { borderColor: lyntraColors.inputBorder }]}>
            <MaterialIcons name="calendar-today" size={20} color={lyntraColors.grayText} style={styles.inputIcon} />
            <TextInput
              placeholder="Fecha de nacimiento"
              placeholderTextColor={lyntraColors.grayText}
              style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
            />
          </View>

          {/* Forgot password */}
          <TouchableOpacity onPress={() => {}} style={styles.forgotWrapper}>
            <Text style={[styles.forgotText, { color: lyntraColors.primary }]}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          {/* Register button */}
          <TouchableOpacity style={[styles.registerButton, { backgroundColor: lyntraColors.primary }]} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>REGISTRARSE</Text>
          </TouchableOpacity>

          {/* Legal */}
          <Text style={[styles.legal, { color: isDark ? lyntraColors.grayText : '#666' }]}>
            Al crear una cuenta aceptas los{' '}
            <Text style={styles.link}>Términos</Text> y{' '}
            <Text style={styles.link}>Política de privacidad</Text>
          </Text>
        </Animated.View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  wrapper: { width: '100%', alignItems: 'center' },
  card: {
    width: width * 0.9,
    borderRadius: 30,
    paddingVertical: 32,
    paddingHorizontal: 24,
    elevation: 6,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 24,
    textAlign: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
  },
  inputIcon: {
    marginRight: 8,
  },
  inputIconRight: {
    marginLeft: 8,
  },
  forgotWrapper: {
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  forgotText: {
    fontSize: 12,
    fontWeight: '500',
  },
  registerButton: {
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  legal: {
    fontSize: 11,
    textAlign: 'center',
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});
