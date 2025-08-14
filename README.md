
# Projet Drupal - Installation avec DDEV

Ce projet Drupal a été développé en local avec **DDEV** et **Docker** sous Windows.  
Les instructions ci-dessous permettent de le mettre en place sur **Linux** (ou tout autre système compatible avec DDEV).

---

## 1. Prérequis

- [Docker](https://ddev.readthedocs.io/en/stable/users/install/docker-installation/) installé et démarré
- [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/#ddev-installation-linux) installé

---

## 2. Récupérer le projet

```bash
git clone https://github.com/CaptainK20/Projet-Drupal.git
cd Projet-Drupal
````

---

## 3. Démarrer l'environnement DDEV

```bash
ddev start
```

---

## 4. Installer les dépendances PHP

```bash
ddev composer install
```

---

## 5. Base de données

```bash
ddev import-db --src=backup.sql.gz
```

---

## 6. Vider le cache Drupal

```bash
ddev drush cr
```

---

## 7. Accéder au site

```bash
ddev launch
```
---

