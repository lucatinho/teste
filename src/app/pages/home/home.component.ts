import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart, registerables} from "chart.js";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('myCanvas', {static: true})
  myCanvas: ElementRef;

  @ViewChild(MatSort)
  sort: MatSort;

  medias = [
    {
      nome: "Angela",
      nota: 10
    },
    {
      nome: "Gale",
      nota: 8
    },
    {
      nome: "Clo",
      nota: 3
    },
    {
      nome: "Paulita",
      nota: 2
    },
    {
      nome: "Consuela",
      nota: 10
    },
    {
      nome: "Noelle",
      nota: 1
    },
    {
      nome: "Joceline",
      nota: 6
    },
    {
      nome: "Abbie",
      nota: 10
    }
  ];

  displayedColumns: string[] = ['nome', 'nota'];
  dataSource = new MatTableDataSource(this.medias);

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    let names: Array<String> = [];
    let notas: Array<Number> = [];
    this.medias.forEach((media) => {
      names.push(media.nome);
      notas.push(media.nota);
    });

    let delayed: boolean;
    new Chart(this.myCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [
          {
            label: 'Media dos Alunos',
            data: notas
          }
        ]
      },
      options: {
        responsive: true,
        indexAxis: "x",
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
