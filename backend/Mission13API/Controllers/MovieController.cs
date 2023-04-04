﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission13API.Data;

namespace Mission13API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private MovieDBContext context;

        MovieController(MovieDBContext temp)
        {
            context = temp;
        }

        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            return context.Movies
                .Where(x => x.Edited == true)
                .OrderBy(x => x.Title)
                .ToArray();
        }
    }
}
