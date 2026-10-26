import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-mail',
    imports: [FormsModule, CommonModule],
    templateUrl: './mail.component.html',
    styleUrl: './mail.component.css'
})
export class Mail {
    ifhover = false;
    email = '';
    english = ['e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'];
    hebrew = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ'];

    char(value: string) {
        this.email = [...value]
            .map((character) => {
                const index = this.hebrew.indexOf(character);
                return index === -1 ? character : this.english[index];
            })
            .join('');
    }

    addEndGmail() {
        if (!this.email.endsWith('@gmail.com')) {
            this.email += '@gmail.com';
        }

        this.enter();
    }
    submittedEmail = '';
    isSubmitted = false;

    enter() {
        this.submittedEmail = this.email;
        this.isSubmitted = true;

    }
}
