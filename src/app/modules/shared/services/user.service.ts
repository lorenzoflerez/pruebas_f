import { Injectable } from '@angular/core';
import { getAuth, User } from 'firebase/auth';
import { Auth, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private auth: Auth) {
    const authInstance = getAuth();
    this.userSubject.next(authInstance.currentUser);

    this.auth.onAuthStateChanged(user => {
      this.userSubject.next(user);
    });
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }
}

