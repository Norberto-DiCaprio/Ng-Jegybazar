import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public errorMsg: string;

    constructor(private userService: UserService, private router: Router) {}

    ngOnInit() {}

    login(email: string, password: string) {
        if (!this.userService.login(email, password)) {
            this.errorMsg = 'Hiba a belépési adatokban. Próbáld újra később';
        } else {
            this.router.navigate(['/user']);
        }
    }

    clearError() {
        delete(this.errorMsg);
    }
}
