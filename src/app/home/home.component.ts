import { Component } from '@angular/core';
import * as mammoth from 'mammoth';

@Component({
  selector: 'app-home',
    templateUrl: './home.component.html',
      styleUrls: ['./home.component.css']
      })
      export class HomeComponent {
        docxHtml: string = '';
          isDarkMode = false;

            onFileChange(event: any): void {
                const file = event.target.files[0];
                    if (file && file.name.endsWith('.docx')) {
                          const reader = new FileReader();
                                reader.onload = async (e: any) => {
                                        const arrayBuffer = e.target.result;
                                                const result = await mammoth.convertToHtml({ arrayBuffer });
                                                        this.docxHtml = result.value;
                                                              };
                                                                    reader.readAsArrayBuffer(file);
                                                                        } else {
                                                                              alert('Please upload a valid .docx file.');
                                                                                  }
                                                                                    }

                                                                                      toggleTheme(): void {
                                                                                          this.isDarkMode = !this.isDarkMode;
                                                                                            }
                                                                                            }
                                                                                            