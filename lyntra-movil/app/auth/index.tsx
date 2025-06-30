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

// Paleta de colores Lyntra
const lyntraColors = {
  primary: '#007BFF',
  backgroundDark: '#121212',
  backgroundLight: '#F9F9F9',
  inputBorder: '#ddd',
  textDark: '#000000',
  textLight: '#FFFFFF',
  grayText: '#999999',
};

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const isDark = useColorScheme() === 'dark';

  const handleLogin = async () => {
    await AsyncStorage.setItem('token', 'fake-token');
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? lyntraColors.backgroundDark : lyntraColors.primary }]}>
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
          <Text style={[styles.headerText, { color: isDark ? '#fff' : '#000' }]}>Iniciar sesión</Text>

          <Text style={[styles.welcomeTitle, { color: isDark ? '#fff' : '#000' }]}>Bienvenido</Text>
          <Text style={[styles.welcomeText, { color: isDark ? '#aaa' : '#666' }]}>
            Por favor ingresa para continuar
          </Text>

          {/* Email */}
          <View style={[styles.inputWrapper, { borderColor: lyntraColors.inputBorder }]}>
            <MaterialIcons name="email" size={20} color={lyntraColors.grayText} style={styles.inputIcon} />
            <TextInput
              placeholder="Correo electrónico"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor={lyntraColors.grayText}
              style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password */}
          <View style={[styles.inputWrapper, { borderColor: lyntraColors.inputBorder }]}>
            <MaterialIcons name="lock" size={20} color={lyntraColors.grayText} style={styles.inputIcon} />
            <TextInput
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
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

          <TouchableOpacity onPress={() => {}} style={styles.forgotWrapper}>
            <Text style={[styles.forgotText, { color: lyntraColors.primary }]}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.loginButton, { backgroundColor: lyntraColors.primary }]} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace('/(auth)/registrer')}>
            <Text style={[styles.registerText, { color: lyntraColors.primary }]}>¿No tienes cuenta? Regístrate</Text>
          </TouchableOpacity>
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
  welcomeTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
    textAlign: 'center',
  },
  welcomeText: {
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
  loginButton: {
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  registerText: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});
